import { PhotoIds } from './const/const';
import { TestResultsRepository } from './../test-results/test-results.repository';
import {
  BotStatus,
  BotStatusType,
  KeyboardText,
  MessageText,
} from 'src/bot/const/const';
import { Injectable } from '@nestjs/common';
import { Ctx, On, Start, Update } from 'nestjs-telegraf';
import { UsersRepository } from 'src/users/users.repository';
import { CallBackData } from './const/callback-datas';
import { Message } from 'telegraf/typings/core/types/typegram';
import { MyContext } from './const/my-context';
import { KolesoCategories, TestKoleso, TestType } from './const/test-koleso';
import path, { join } from 'path';
import * as fs from 'fs';
import {
  Reck,
  StickerBn,
  TestBn,
  TestBnCategory,
  TestBnType,
} from './const/test-bn';

@Update()
@Injectable()
export class BotService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly testResultsRepository: TestResultsRepository,
  ) {}

  @Start()
  async start(@Ctx() ctx: MyContext) {
    // const result = {
    //   personal_growth: 3,
    //   family: 3,
    //   friends_around: 3,
    //   value: 3,
    //   financial_stability: 3,
    //   hobby_and_interests: 3,
    //   sport_health: 3,
    //   career: 3,
    // };
    // await this.updateFile(result);
    // await ctx.replyWithDocument({
    //   source: 'updated_example.pdf',
    //   filename: 'updated_example.pdf',
    // });
    await this.checkSession(ctx);
  }
  async checkSession(ctx: MyContext) {
    const hasUser = await this.usersRepository.findBy({
      bot_user_id: String(ctx.from.id),
    });

    if (hasUser) {
      ctx.session.status = BotStatus.MENU;
      ctx.session.user_id = hasUser.id;
      await this.usersRepository.updateByBotUserId(ctx.from.id, {
        bot_user_status: BotStatus.MENU,
      });
      await ctx.reply(MessageText.CHOOSE_MENU, this.getButtons(BotStatus.MENU));
      return true;
    } else {
      await this.askName(ctx);
      return false;
    }
  }
  async askName(ctx: MyContext) {
    const full_name =
      ctx.from.first_name +
      ' ' +
      String(ctx.from.last_name ? ctx.from.last_name : '');
    ctx.session.status = BotStatus.ENTER_NAME;
    ctx.session.full_name = full_name;
    await ctx.reply(MessageText.MEETING);
    await ctx.replyWithPhoto(PhotoIds.INTRODUCING);
    await ctx.reply('Sizga ' + full_name + ' deb murojaat qilaveraylikmi?', {
      reply_markup: {
        inline_keyboard: [
          [
            { text: KeyboardText.YES, callback_data: CallBackData.YES_MY_NAME },
            { text: KeyboardText.NO, callback_data: CallBackData.NOT_MY_NAME },
          ],
        ],
      },
    });
  }

  @On('callback_query')
  async onNotMyName(@Ctx() ctx: MyContext) {
    const callbackData = (ctx.callbackQuery as any).data;
    switch (callbackData) {
      case CallBackData.NOT_MY_NAME: {
        if (ctx.callbackQuery.message) {
          await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
        }
        ctx.session.status = BotStatus.ENTER_NAME;
        await ctx.reply(MessageText.SEND_NAME);
        break;
      }
      case CallBackData.YES_MY_NAME: {
        if (ctx.callbackQuery.message) {
          await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
        }
        ctx.session.status = BotStatus.ENTER__CONTACT;
        await ctx.reply(
          MessageText.SEND_CONTACT,
          this.getButtons(BotStatus.ENTER__CONTACT),
        );
      }
    }
    if (ctx.session.status === BotStatus.TEST.KOLESO) {
      await ctx.answerCbQuery();
      await ctx.editMessageReplyMarkup(null);
      const res = callbackData.split('|'); //0 is index of test, 1 is category, 2 is ball
      const newTest = TestKoleso[Number(res[0]) + 1];
      if (newTest) {
        ctx.session[res[1]]
          ? (ctx.session[res[1]] = ctx.session[res[1]] + Number(res[2]))
          : (ctx.session[res[1]] = Number(res[2]));
        if (newTest.category !== res[1]) {
          let progress: string = '';
          let text: string = '';
          switch (newTest.category) {
            case KolesoCategories.FAMILY: {
              progress = '🟧⬜️⬜️⬜️⬜️⬜️⬜️⬜️';
              text = 'Oila, Munosabatlar kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.FRIENDS_AROUND: {
              progress = '🟧🟧⬜️⬜️⬜️⬜️⬜️⬜️';
              text = 'Atrofdagi Do`stlar (muloqot) kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.VALUE: {
              progress = '🟧🟧🟧⬜️⬜️⬜️⬜️⬜️';
              text = 'Qadriyat kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.FINANCIAL_STABILITY: {
              progress = '🟧🟧🟧🟧⬜️⬜️⬜️⬜️';
              text = 'Moliyaviy barqarorlik kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.HOBBY_AND_INTERESTS: {
              progress = '🟧🟧🟧🟧🟧⬜️⬜️⬜️';
              text = 'Hobbi va qiziqishlar kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.SPORT_HEALTH: {
              progress = '🟧🟧🟧🟧🟧🟧⬜️⬜️';
              text = 'Sport-Sog`liq kategoriyasidagi savollar: ';
              break;
            }
            case KolesoCategories.CAREER: {
              progress = '🟧🟧🟧🟧🟧🟧🟧⬜️';
              text = 'Biznes-karera kategoriyasidagi savollar: ';
              break;
            }
          }
          setTimeout(async () => {
            await ctx.reply(progress);
          }, 2000);
          setTimeout(async () => {
            await ctx.reply(text);
          }, 2200);
          await this.startKolesoTest(ctx, Number(res[0]) + 1, 3000);
        } else {
          await this.startKolesoTest(ctx, Number(res[0]) + 1);
        }
      } else {
        ctx.session[res[1]]
          ? (ctx.session[res[1]] = ctx.session[res[1]] + Number(res[2]))
          : (ctx.session[res[1]] = Number(res[2]));

        const result = {
          personal_growth: ctx.session['personal_growth'] / 10,
          family: ctx.session['family'] / 5,
          friends_around: ctx.session['friends_around'] / 10,
          value: ctx.session['value'] / 8,
          financial_stability: ctx.session['financial_stability'] / 11,
          hobby_and_interests: ctx.session['hobby_and_interests'] / 5,
          sport_health: ctx.session['sport_health'] / 5,
          career: ctx.session['career'] / 9,
        };
        await this.updateFile(result);
        await this.testResultsRepository.create({
          user_id: ctx.session.user_id,
          result_koleso: result,
        });
        // await ctx.replyWithDocument({
        //   source: 'updated_example.pdf',
        //   filename: 'updated_example.pdf',
        // });
        ctx.session.status = BotStatus.MENU;
        await this.usersRepository.updateByBotUserId(ctx.from.id, {
          bot_user_status: BotStatus.MENU,
        });
        await ctx.reply(
          `Sizning resultatingiz:\n
          \nShahsiy o'sish: ${parseFloat(result.personal_growth.toFixed(1))},
          \nOila, Munosabatlar: ${parseFloat(result.family.toFixed(1))},
          \nAtrofdagi Do'stlar (muloqot): ${parseFloat(result.friends_around.toFixed(1))},
          \nQadriyat: ${parseFloat(result.value.toFixed(1))},
          \nMoliyaviy barqarorlik: ${parseFloat(result.financial_stability.toFixed(1))},
          \nHobbi va qiziqishlar: ${parseFloat(result.hobby_and_interests.toFixed(1))},
          \nSport-Sog'liq: ${parseFloat(result.sport_health.toFixed(1))},
          \nBiznes-karera: ${parseFloat(result.career.toFixed(1))}`,
          this.getButtons(BotStatus.MENU),
        );
      }
    } else if (ctx.session.status === BotStatus.TEST.BN) {
      if (ctx.callbackQuery.message) {
        await ctx.deleteMessage(ctx.callbackQuery.message.message_id);
      }
      const res = callbackData.split('|'); //0-index of test, 1- category, 2-ball, 3-type feature or now

      if (res[3] === TestBnType.NOW) {
        ctx.session['first_ball'] = Number(res[2]);
        return this.startBnTest(ctx, res[0], TestBnType.FEATURE, 50);
      } else {
        const average_ball = (ctx.session['first_ball'] + Number(res[2])) / 2;
        const test = TestBn[Number(res[0])];
        ctx.session.tes_bn.push({
          no: test.no,
          category: test.category,
          average_ball,
        });

        const newTest = TestBn[Number(res[0]) + 1];
        if (newTest) {
          if (newTest.category === test.category) {
            return this.startBnTest(
              ctx,
              Number(res[0]) + 1,
              TestBnType.NOW,
              // 50,
            );
          } else {
            switch (newTest.category) {
              case TestBnCategory.SOFT_SKILLS: {
                await ctx.reply(Reck.TEST_NB.FIRST_BLOG[1]);
                setTimeout(async () => {
                  await ctx.reply(Reck.TEST_NB.FIRST_BLOG[2]);
                }, 5000);
                const res = this.sumByCategory(ctx.session.tes_bn);
                console.log(
                  Math.floor(res[TestBnCategory.BUSINESS] / 80),
                  Math.floor(res[TestBnCategory.BUSINESS] / 8),
                );
                const sticker =
                  StickerBn[Math.floor(res[TestBnCategory.BUSINESS] / 80)];
                const result =
                  sticker +
                  '\n100% dan ' +
                  Math.floor(res[TestBnCategory.BUSINESS] / 8) +
                  '%';
                setTimeout(async () => {
                  await ctx.reply(result);
                }, 18000);
                setTimeout(async () => {
                  await ctx.reply(Reck.TEST_NB.FIRST_BLOG[3]);
                }, 19000);
                setTimeout(async () => {
                  await ctx.replyWithPhoto(PhotoIds.BN_SOFT_SKILLS, {
                    caption: Reck.TEST_NB.FIRST_BLOG[4],
                  });
                }, 32000);
                break;
              }
              case TestBnCategory.THINK: {
                await ctx.reply(Reck.TEST_NB.SECOND_BLOG[1]);
                setTimeout(async () => {
                  await ctx.reply(Reck.TEST_NB.SECOND_BLOG[2]);
                }, 5000);
                const res = this.sumByCategory(ctx.session.tes_bn);
                const sticker =
                  StickerBn[Math.floor(res[TestBnCategory.SOFT_SKILLS] / 80)];
                const result =
                  sticker +
                  '\n100% dan ' +
                  Math.floor(res[TestBnCategory.SOFT_SKILLS] / 8) +
                  '%';
                setTimeout(async () => {
                  await ctx.reply(result);
                }, 18000);
                setTimeout(async () => {
                  await ctx.reply(Reck.TEST_NB.SECOND_BLOG[3]);
                }, 19000);
                setTimeout(async () => {
                  await ctx.replyWithPhoto(PhotoIds.BN_THINK, {
                    caption: Reck.TEST_NB.SECOND_BLOG[4],
                  });
                }, 32000);

                break;
              }
              case TestBnCategory.ENERGY: {
                await ctx.reply(Reck.TEST_NB.THIRD_BLOG[1]);
                setTimeout(async () => {
                  await ctx.reply(Reck.TEST_NB.THIRD_BLOG[2]);
                }, 5000);
                const res = this.sumByCategory(ctx.session.tes_bn);

                const sticker =
                  StickerBn[Math.floor(res[TestBnCategory.THINK] / 80)];
                const result =
                  sticker +
                  '\n100% dan ' +
                  Math.floor(res[TestBnCategory.THINK] / 8) +
                  '%';
                setTimeout(async () => {
                  await ctx.reply(result);
                }, 18000);
                setTimeout(async () => {
                  await ctx.reply(Reck.TEST_NB.THIRD_BLOG[3]);
                }, 19000);
                setTimeout(async () => {
                  await ctx.replyWithPhoto(PhotoIds.BN_ENERGY, {
                    caption: Reck.TEST_NB.THIRD_BLOG[4],
                  });
                }, 32000);
                break;
              }
            }
            return this.startBnTest(
              ctx,
              Number(res[0]) + 1,
              TestBnType.NOW,
              40000,
            );
          }
        } else {
          const res = this.sumByCategory(ctx.session.tes_bn);
          await this.testResultsRepository.create({
            user_id: ctx.session.user_id,
            result_bn: ctx.session.tes_bn,
          });
          // const total_result = {
          //   [TestBnCategory.BUSINESS]: res[TestBnCategory.BUSINESS] / 8,
          //   [TestBnCategory.ENERGY]: res[TestBnCategory.ENERGY] / 8,
          //   [TestBnCategory.SOFT_SKILLS]: res[TestBnCategory.SOFT_SKILLS] / 8,
          //   [TestBnCategory.THINK]: res[TestBnCategory.THINK] / 8,
          // };
          ctx.session.status = BotStatus.MENU;
          await this.usersRepository.updateByBotUserId(ctx.from.id, {
            bot_user_status: BotStatus.MENU,
          });
          setTimeout(async () => {
            await ctx.reply(Reck.TEST_NB.FOUR_BLOG[1]);
          }, 5000);
          const sticker = StickerBn[Math.floor(res[TestBnCategory.THINK] / 80)];
          const result =
            sticker +
            '\n100% dan' +
            Math.floor(res[TestBnCategory.THINK] / 8) +
            '%';
          setTimeout(async () => {
            await ctx.reply(result);
          }, 20000);
          setTimeout(async () => {
            await ctx.reply(Reck.TEST_NB.FOUR_BLOG[2]);
          }, 22000);
          setTimeout(async () => {
            await ctx.reply(
              MessageText.CHOOSE_MENU,
              this.getButtons(BotStatus.MENU),
            );
          }, 23000);
        }
      }
    }
  }

  sumByCategory(data: any[]): { [category: string]: number } {
    return data.reduce(
      (acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = 0;
        }
        acc[item.category] += item.average_ball;
        return acc;
      },
      {} as { [category: string]: number },
    );
  }

  async updateFile(result: any) {
    const pdfFileName = 'test_koleso.pdf';
    const cwd = process.cwd();
    const pdfFilePath = join(cwd, 'src/bot/pdf', pdfFileName);
    // Read the existing PDF file
    const existingPdfBuffer = fs.readFileSync(pdfFilePath);

    // Modify the content as needed (for example, replacing a specific word)
    const existingContent = existingPdfBuffer.toString();
    const updatedContent = existingContent
      .replace('personal_growth_placeholder', result.personal_growth)
      .replace('family_placeholder', result.family)
      .replace('friends_around_placeholder', result.friends_around)
      .replace('value_placeholder', result.value)
      .replace('financial_stability_placeholder', result.financial_stability)
      .replace('hobby_and_interests_placeholder', result.hobby_and_interests)
      .replace('sport_health_placeholder', result.sport_health)
      .replace('career_placeholder', result.career);

    // Write the modified content back to the PDF file

    return fs.writeFileSync('updated_example.pdf', updatedContent);
  }

  @On('contact')
  async contact(@Ctx() ctx: MyContext) {
    const message = ctx.message as Message.ContactMessage;
    ctx.session.phone = message.contact.phone_number;
    ctx.session.status = BotStatus.ENTER_BIRTH_DATE;

    await ctx.reply(MessageText.SEND_BIRTH_DATE, {
      reply_markup: {
        remove_keyboard: true,
      },
    });
  }
  @On('photo')
  async onPhoto(@Ctx() ctx: MyContext) {
    const message = ctx.message as Message.PhotoMessage;
    if (message.photo) {
      // Get the array of photos (different sizes)
      const photos = message.photo;

      // Get the file ID of the largest photo
      const largestPhoto = photos[photos.length - 1];
      const fileId = largestPhoto.file_id;

      // Log the file ID
      console.log('Photo file ID:', fileId);

      // Reply with the same photo
      await ctx.replyWithPhoto(fileId);
    } else {
      await ctx.reply('No photo found in the message.');
    }
  }

  @On('text')
  async onText(@Ctx() ctx: MyContext) {
    if (!ctx.session.status) {
      const data = await this.checkSession(ctx);
      if (data === false) {
        return;
      }
    }

    const message = (ctx.message as Message.TextMessage).text;
    switch (ctx.session.status) {
      case BotStatus.ENTER_NAME: {
        ctx.session.full_name = message;
        ctx.session.status = BotStatus.ENTER__CONTACT;
        await ctx.reply(
          MessageText.SEND_CONTACT,
          this.getButtons(BotStatus.ENTER__CONTACT),
        );
        return;
      }
      case BotStatus.ENTER_BIRTH_DATE: {
        if (!this.isValidDate(message)) {
          await ctx.reply(MessageText.VALIDATION_ERROR_DATE);
        } else {
          ctx.session.status = BotStatus.ENTER_BUSINESS;
          ctx.session.birth_date = message;
          await ctx.reply(MessageText.SEND_BUSINESS);
        }
        return;
      }
      case BotStatus.ENTER_BUSINESS: {
        ctx.session.status = BotStatus.MENU;
        const [resp] = await this.usersRepository.create({
          bot_user_id: ctx.from.id,
          full_name: ctx.session.full_name,
          phone: ctx.session.phone,
          birth_date: ctx.session.birth_date,
          business: message,
          bot_user_status: BotStatus.MENU,
        });
        ctx.session.user_id = resp.id;

        await ctx.reply(MessageText.WELCOME, this.getButtons(BotStatus.MENU));
        return;
      }
      case BotStatus.TEST.KOLESO: {
        if (!ctx.session['koleso']) {
          return;
        }
        const session_balls = ctx.session['koleso'].split('|');
        const result = message.split(',');
        if (!result.length) {
          await ctx.reply(MessageText.WRONG_FORMAT);
          return;
        } else {
          let ball: number = 0;
          let is_success = true;
          result.forEach(async (data) => {
            const numberValue: number = +data;

            if (!isNaN(numberValue) && numberValue > 0 && numberValue <= 9) {
              const value =
                TestKoleso[session_balls[0]].variants[numberValue - 1].value;
              ball += value;
            } else {
              await ctx.reply(MessageText.WRONG_FORMAT);
              is_success = false;
              return;
            }
          });
          if (is_success === true) {
            ctx.session[session_balls[1]]
              ? (ctx.session[session_balls[1]] =
                  ctx.session[session_balls[1]] + ball)
              : (ctx.session[session_balls[1]] = ball);
            await this.startKolesoTest(ctx, Number(session_balls[0]) + 1);
          }
        }
      }
    }
    switch (message) {
      case KeyboardText.TEST_KOLESO: {
        const { status, user_id, ...rest } = ctx.session;
        ctx.session = { status: BotStatus.TEST.KOLESO, user_id };

        return this.startKolesoTest(ctx, 0);
      }
      case KeyboardText.TEST_BN: {
        const { status, user_id, ...rest } = ctx.session;
        ctx.session = { status: BotStatus.TEST.BN, user_id, tes_bn: [] };
        await ctx.replyWithPhoto(PhotoIds.BN_START);
        return this.startBnTest(ctx, 0, TestBnType.NOW);
      }
    }
  }
  async startBnTest(
    ctx: MyContext,
    i: number,
    type: TestBnType,
    time: number = 3000,
  ) {
    const test = TestBn[i];
    const keyBoards: any[] = [];
    let j = 1;
    let t: any[] = [];
    let buttonText: string;
    if (type === TestBnType.NOW) {
      let question = '<b>' + test.question + '</b>';
      question += '\n\n';
      buttonText = 'Hozirda: ';
      test.answer.forEach((element) => {
        question += element.text + '\n';
        t.push({
          text: j,
          callback_data:
            i + '|' + test.category + '|' + element.ball + '|' + TestBnType.NOW,
        });
        j++;
      });
      await setTimeout(async () => {
        return await ctx.reply(question, { parse_mode: 'HTML' });
      }, time - 2000);
    } else {
      buttonText = 'Kelajakda: ';
      test.answer.forEach((element) => {
        t.push({
          text: j,
          callback_data:
            i +
            '|' +
            test.category +
            '|' +
            element.ball +
            '|' +
            TestBnType.FEATURE,
        });
        j++;
      });
    }
    keyBoards.push(t);
    if (i === 0) {
      await ctx.replyWithPhoto(PhotoIds.BN_BUSINESS, {
        reply_markup: { remove_keyboard: true },
      });
    }

    setTimeout(async () => {
      await ctx.reply(buttonText, {
        reply_markup: {
          inline_keyboard: keyBoards,
        },
      });
    }, time);
  }

  async startKolesoTest(ctx: MyContext, i: number, time: number = 1000) {
    const test = TestKoleso[i];
    const keyBoards: any[] = [];
    let question = '<b>' + test.question + '</b>';
    if (test.type === TestType.NUMBERS) {
      let t: any[] = [];
      for (let j = 1; j <= 5; j++) {
        t.push({ text: j, callback_data: i + '|' + test.category + '|' + j });
      }
      keyBoards.push(t);
      t = [];
      for (let j = 6; j <= 10; j++) {
        t.push({ text: j, callback_data: i + '|' + test.category + '|' + j });
      }

      keyBoards.push(t);
    } else if (test.type === TestType.SINGLE_ANSWER) {
      question += '\n\n';
      let j = 1;
      let t: any[] = [];
      test.variants.forEach((element) => {
        question += j + '. ' + element.answer + '\n';
        t.push({
          text: j,
          callback_data: i + '|' + test.category + '|' + element.value,
        });
        j++;
      });
      keyBoards.push(t);
    } else if (test.type === TestType.MULTIPLE_ANSWER) {
      question += '\n\n';
      let j = 1;
      test.variants.forEach((element) => {
        question += j + '. ' + element.answer + '\n';
        j++;
      });
      ctx.session['koleso'] = i + '|' + test.category;
    }
    if (i === 0) {
      await ctx.reply('Shahsiy o`sish kategoriyasidagi savollar: ', {
        reply_markup: { remove_keyboard: true },
      });
    }
    if (test.type !== TestType.MULTIPLE_ANSWER) {
      setTimeout(async () => {
        ctx.replyWithPhoto(test.photo, {
          caption: question,
          parse_mode: 'HTML',
          reply_markup: {
            inline_keyboard: keyBoards,
          },
        });
      }, time);
    } else {
      setTimeout(async () => {
        await ctx.replyWithPhoto(test.photo, {
          parse_mode: 'HTML',
          caption: question + `\n\nJavoblarni 1,2,3,4 ko'rinishida yuboring`,
        });
      }, time);
    }
  }

  getButtons(status: BotStatusType) {
    if (status === BotStatus.MENU) {
      return {
        reply_markup: {
          keyboard: [
            [{ text: KeyboardText.TEST_KOLESO }],
            [{ text: KeyboardText.TEST_BN }],
            // [{ text: KeyboardText.PROFILE }],
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
    } else if (status === BotStatus.ENTER__CONTACT) {
      return {
        reply_markup: {
          keyboard: [
            [
              {
                text: KeyboardText.SHARE_CONTACT,
                request_contact: true,
              },
            ],
          ],
          resize_keyboard: true,
          one_time_keyboard: true,
        },
      };
    }
  }
  isValidDate(date: string): boolean {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateRegex.test(date)) {
      return false;
    }

    const [year, month, day] = date.split('-').map(Number);

    const parsedDate = new Date(year, month - 1, day);
    if (
      parsedDate.getFullYear() === year &&
      parsedDate.getMonth() === month - 1 &&
      parsedDate.getDate() === day
    ) {
      return true;
    }

    return false;
  }
  // sendWebApp(ctx: Context, full_name: string) {
  //   return ctx.reply(full_name + ' test ishlash uchun bosing:', {
  //     reply_markup: {
  //       inline_keyboard: [
  //         [
  //           {
  //             text: 'Test ishlash',
  //             web_app: {
  //               url: 'https://test-task-uz.netlify.app/' + ctx.from.id,
  //             },
  //           },
  //         ],
  //       ],
  //       resize_keyboard: true,
  //       one_time_keyboard: true,
  //     },
  //   });
  // }
}
