// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "study",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "",
    "description": "",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "本実験・調査について",
          "content": "本実験・調査への参加はあなたの任意によるものです。"
        },
        {
          "required": true,
          "type": "text",
          "title": "1．本実験・調査の目的",
          "content": "広告の効果について調べることが本実験・調査の目的です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "2．本実験・調査の手続き",
          "content": "もし、本実験・調査に参加していただく場合、いくつかの広告をご覧になっていただきます。この実験・調査の所要時間は約5分程度です。"
        },
        {
          "required": true,
          "type": "text",
          "title": "3．潜在的なリスク・苦痛など",
          "content": "実験による多少の疲労は除き、潜在的なリスクや苦痛はございません。また、いつ、いかなる理由でも、自由に実験を中止していただけます（6．参加と中止もご参照ください）。"
        },
        {
          "required": true,
          "type": "text",
          "title": "4．参加による利益",
          "content": "あなたが本実験・調査に参加することで認知、感情についての研究の発展につながります。"
        },
        {
          "required": true,
          "type": "text",
          "title": "5．匿名性の確保",
          "content": "本実験・調査によって得られた情報は法律による開示請求を除き、匿名性が維持されます。 匿名性は実験参加番号者の付与、統計的な解析によって保たれます。 収集されたデータは匿名化した上で、統計的な処理を行い、論文や発表で公表されます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "6．参加と中止",
          "content": "あなたは本実験・調査への参加もしくは不参加を自由に選択できます。 また、参加した場合でも、でも、そのような理由でも、途中で実験・調査を中止することができます。 もし、途中で実験・調査を中止した場合は、「ESCキー」を押した後、ウィンドウを閉じることで実験・調査を中止できます。"
        },
        {
          "required": true,
          "type": "text",
          "title": "7．実験・調査実施者へのお問い合わせ",
          "content": "本実験・調査について質問がある場合は、実施者または実施責任者にお問い合わせください。"
        },
        {
          "required": true,
          "type": "checkbox",
          "label": "実験・調査への参加に同意いただけますか？同意いただける方はチェックをお願いします。同意いただけない方は，ESCを押した後，ウィンドウを閉じてください。",
          "options": [
            {
              "label": "上記の説明をよく読み，理解した上で，実験・調査への参加に同意します。",
              "coding": "informedConsent"
            }
          ],
          "name": "esc"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "informed consent"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text"
        },
        {
          "required": true,
          "type": "input",
          "label": "年齢",
          "attributes": {
            "type": "number",
            "max": "99"
          },
          "help": "年齢を半角数字で入力してください",
          "name": "Age"
        },
        {
          "required": true,
          "type": "radio",
          "label": "性別",
          "options": [
            {
              "label": "男",
              "coding": "1"
            },
            {
              "label": "女",
              "coding": "2"
            },
            {
              "label": "その他",
              "coding": "3"
            }
          ],
          "name": "gender"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "information"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "広告を見て質問にお答えください。広告のページは4秒後自動で切り替わります。",
          "content": ""
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "introduction"
    },
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "shuffle": true,
      "content": [
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Perfume:none",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 529,
                  "height": 516,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"香水高価格なし.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "広告腕時計　AI　低価格.png": "embedded\u002Ffe139bfc33c5315b3e6b8f36538caba89057badd925daf0a7f741423df360bb7.png",
                "LINE_ALBUM_広告の画像_260703_1　AI人時計.jpg": "embedded\u002F3100828e632c5ecc506f7fde8e29209d08b5f777af2d246e3722b6135072f31e.jpg",
                "LINE_ALBUM_広告の画像_260703_1　動物.jpg": "embedded\u002F7c66e31bb5e0e318cbc257f573e9b5891b866028943358613142048c2b5544c4.jpg",
                "kosui nashi teikakaku.jpg": "embedded\u002Fff21b26ed6122303b6dd6a59ae62a2974b28ff05bf42c614f0ef5403b54a14ab.jpg",
                "香水高価格なし.jpg": "embedded\u002Fe0b700ad637aefb37bd9fa8ecd8fa0625ac839cc3d3396d3e3fa8a6df712dee4.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "P:none",
              "timeout": "4000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この商品を買いたくなった",
                      "coding": "PN1"
                    },
                    {
                      "label": "このブランドへの信頼度が高まった",
                      "coding": "PN2"
                    },
                    {
                      "coding": "PN3",
                      "label": "この広告への不快感を感じた"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "label": "当てはまるものをお答えください。",
                  "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Perfume:animal",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 542,
                  "height": 499,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"香水高価格動物.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "広告腕時計　AI　低価格.png": "embedded\u002Ffe139bfc33c5315b3e6b8f36538caba89057badd925daf0a7f741423df360bb7.png",
                "LINE_ALBUM_広告の画像_260703_1　AI人時計.jpg": "embedded\u002F3100828e632c5ecc506f7fde8e29209d08b5f777af2d246e3722b6135072f31e.jpg",
                "LINE_ALBUM_広告の画像_260703_1　動物.jpg": "embedded\u002F7c66e31bb5e0e318cbc257f573e9b5891b866028943358613142048c2b5544c4.jpg",
                "LINE_ALBUM_広告の画像_260707_1.jpg": "embedded\u002F2e4883321b83beec0c3d831d950c33985872a79dd5906a64d745658740b261aa.jpg",
                "kousui doubutsu teikaakaku.jpg": "embedded\u002F14051d09fdcb416ff2810f70b3b650b1033a02c74c4f170b1f9cd9c72ace1771.jpg",
                "香水高価格動物.jpg": "embedded\u002F5902bbc85745a4c58ae7ed462d42eb9902a8f6f7addccb9abf1f85d314efefbf.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "P:AI:animal",
              "timeout": "4000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この商品を買いたくなった",
                      "coding": "PA1"
                    },
                    {
                      "label": "このブランドへの信頼度が高まった",
                      "coding": "PA2"
                    },
                    {
                      "coding": "PA3",
                      "label": "この広告への不快感を感じた"
                    },
                    {
                      "label": "このインフルエンサーへの魅力を感じる",
                      "coding": "PA4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "label": "当てはまるものをお答えください。",
                  "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Watch:animal",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 455,
                  "height": 429,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"腕時計高価格動物.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "広告腕時計　AI　低価格.png": "embedded\u002Ffe139bfc33c5315b3e6b8f36538caba89057badd925daf0a7f741423df360bb7.png",
                "LINE_ALBUM_広告の画像_260703_1　AI人時計.jpg": "embedded\u002F3100828e632c5ecc506f7fde8e29209d08b5f777af2d246e3722b6135072f31e.jpg",
                "LINE_ALBUM_広告の画像_260703_1　動物.jpg": "embedded\u002F7c66e31bb5e0e318cbc257f573e9b5891b866028943358613142048c2b5544c4.jpg",
                "LINE_ALBUM_広告の画像_260707_1.jpg": "embedded\u002F2e4883321b83beec0c3d831d950c33985872a79dd5906a64d745658740b261aa.jpg",
                "LINE_ALBUM_広告の画像_260707_2.jpg": "embedded\u002F59ae8e347fa8add49513a1579657c512a87002e376c0d3e5c17b7a0b3432e7ef.jpg",
                "広告腕時計　動物 低価格.jpeg": "embedded\u002F97932338d0fcb13398ba127ffb5bcb52f219e5cc6923c9cd9ebe041fdc772730.jpeg",
                "腕時計高価格動物.jpg": "embedded\u002F19a8007a659390378c087ecb0adb6ddc3b6b67a11870bf92ac1658c81fa75a5c.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "W:AI:animal",
              "timeout": "4000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この商品を買いたくなった",
                      "coding": "WA1"
                    },
                    {
                      "label": "このブランドへの信頼度が高まった",
                      "coding": "WA2"
                    },
                    {
                      "coding": "WA3",
                      "label": "この広告への不快感を感じた"
                    },
                    {
                      "label": "このインフルエンサーへの魅力を感じる",
                      "coding": "WA4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "label": "当てはまるものをお答えください。",
                  "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Watch:none",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 542,
                  "height": 520,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"腕時計高価格なし.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "広告香水　AI 低価格.png": "embedded\u002F51b77f90913e3eab14e1d37a9a3de1677b8ba7f408328bb3e72a696fe3d5efb7.png",
                "LINE_ALBUM_広告の画像_260703_1　時計なし.jpg": "embedded\u002Fd42c3a2d23407eec5b3c6ab2b9be2138d4340cce698ece4571f4fac0846e93ea.jpg",
                "udedokei nshi teikakaku.jpg": "embedded\u002Fa3f8e913abf0fda2331af0558109d2cff65fa8d55fe38049b77f9c6b8a518c06.jpg",
                "腕時計高価格なし.jpg": "embedded\u002F9384323ed77521a2b48def99875b4b77d45e310473011a94dc0cf854d5175027.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "W:none",
              "timeout": "4000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この商品を買いたくなった",
                      "coding": "WN1"
                    },
                    {
                      "label": "このブランドへの信頼度が高まった",
                      "coding": "WN2"
                    },
                    {
                      "coding": "WN3",
                      "label": "この広告への不快感を感じた"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "label": "当てはまるものをお答えください。",
                  "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question"
            }
          ]
        },
        {
          "type": "lab.flow.Sequence",
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Perfume:human",
          "content": [
            {
              "type": "lab.canvas.Screen",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 2,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": 32,
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                },
                {
                  "type": "image",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 530,
                  "height": 499,
                  "stroke": null,
                  "strokeWidth": 0,
                  "fill": "black",
                  "src": "${ this.files[\"香水高価格人.jpg\"] }"
                }
              ],
              "viewport": [
                800,
                600
              ],
              "files": {
                "広告腕時計　動物 低価格.jpeg": "embedded\u002F97932338d0fcb13398ba127ffb5bcb52f219e5cc6923c9cd9ebe041fdc772730.jpeg",
                "LINE_ALBUM_広告の画像_260703_1　AI人.jpg": "embedded\u002F86eeb3ee4e3fcad0e17bed71e54f8e500fa87a5725ccbffd85fc7e95a77cd0f3.jpg",
                "広告香水　AI 低価格.png": "embedded\u002F51b77f90913e3eab14e1d37a9a3de1677b8ba7f408328bb3e72a696fe3d5efb7.png",
                "香水高価格人.jpg": "embedded\u002F5dae671197ab87d5c41dbec683ae2ef1d1a1b63e2bed15ed5580e6ebfea9a67f.jpg"
              },
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "P:AI:human",
              "timeout": "4000"
            },
            {
              "type": "lab.html.Page",
              "items": [
                {
                  "type": "text",
                  "content": ""
                },
                {
                  "required": true,
                  "type": "likert",
                  "items": [
                    {
                      "label": "この商品を買いたくなった",
                      "coding": "PH1"
                    },
                    {
                      "label": "このブランドへの信頼度が高まった",
                      "coding": "PH2"
                    },
                    {
                      "coding": "PH3",
                      "label": "この広告への不快感を感じた"
                    },
                    {
                      "label": "このインフルエンサーへの魅力を感じる",
                      "coding": "PH4"
                    }
                  ],
                  "width": "5",
                  "anchors": [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                  ],
                  "label": "当てはまるものをお答えください。",
                  "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                  "name": ""
                }
              ],
              "scrollTop": true,
              "submitButtonText": "次へ",
              "submitButtonPosition": "right",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "question"
            },
            {
              "type": "lab.flow.Sequence",
              "files": {},
              "responses": {
                "": ""
              },
              "parameters": {},
              "messageHandlers": {},
              "title": "Watch:human",
              "content": [
                {
                  "type": "lab.canvas.Screen",
                  "content": [
                    {
                      "type": "image",
                      "left": 0,
                      "top": 0,
                      "angle": 0,
                      "width": 522,
                      "height": 496,
                      "stroke": null,
                      "strokeWidth": 0,
                      "fill": "black",
                      "src": "${ this.files[\"腕時計高価格人.jpg\"] }"
                    }
                  ],
                  "viewport": [
                    800,
                    600
                  ],
                  "files": {
                    "広告腕時計　AI　低価格.png": "embedded\u002Ffe139bfc33c5315b3e6b8f36538caba89057badd925daf0a7f741423df360bb7.png",
                    "LINE_ALBUM_広告の画像_260703_1　AI人時計.jpg": "embedded\u002F3100828e632c5ecc506f7fde8e29209d08b5f777af2d246e3722b6135072f31e.jpg",
                    "腕時計高価格人.jpg": "embedded\u002F8b581431008af100c520928362256a08cc0e5c8dded30fcf99146e85b22cdaf5.jpg"
                  },
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "W:AI:human",
                  "timeout": "4000"
                },
                {
                  "type": "lab.html.Page",
                  "items": [
                    {
                      "type": "text",
                      "content": ""
                    },
                    {
                      "required": true,
                      "type": "likert",
                      "items": [
                        {
                          "label": "この商品を買いたくなった",
                          "coding": "WH1"
                        },
                        {
                          "label": "このブランドへの信頼度が高まった",
                          "coding": "WH2"
                        },
                        {
                          "coding": "WH3",
                          "label": "この広告への不快感を感じた"
                        },
                        {
                          "label": "このインフルエンサーへの魅力を感じる",
                          "coding": "WH4"
                        }
                      ],
                      "width": "5",
                      "anchors": [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5"
                      ],
                      "label": "当てはまるものをお答えください。",
                      "help": "1=全くそう思わない、2=そう思わない、3=どちらとも言えない、4=そう思う、5=非常にそう思う",
                      "name": ""
                    }
                  ],
                  "scrollTop": true,
                  "submitButtonText": "次へ",
                  "submitButtonPosition": "right",
                  "files": {},
                  "responses": {
                    "": ""
                  },
                  "parameters": {},
                  "messageHandlers": {},
                  "title": "question"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "AIが生成したモデルだと思うものにチェックを付けてください。該当するものがない場合は、そのまま次へお進みください。"
        },
        {
          "required": true,
          "type": "image",
          "src": "${ this.files[\"高価格AI確認画像.jpg\"] }",
          "name": ""
        },
        {
          "required": false,
          "type": "checkbox",
          "options": [
            {
              "label": "1",
              "coding": "AI1"
            },
            {
              "label": "2",
              "coding": "AI2"
            },
            {
              "label": "3",
              "coding": "AI3"
            },
            {
              "label": "4",
              "coding": "AI4"
            }
          ],
          "name": "AIorNot"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {
        "LINE_ALBUM_広告の画像_260703_1　AI人時計.jpg": "embedded\u002F3100828e632c5ecc506f7fde8e29209d08b5f777af2d246e3722b6135072f31e.jpg",
        "LINE_ALBUM_広告の画像_260703_1　AI人.jpg": "embedded\u002F86eeb3ee4e3fcad0e17bed71e54f8e500fa87a5725ccbffd85fc7e95a77cd0f3.jpg",
        "S__93937673.jpg": "embedded\u002Fb7f8837cd1c1ad117c7a582928a3897aacbda6facacd845ac7ae80d519a1133e.jpg",
        "ai kakuningazou.JPG": "embedded\u002F8118f9e777fe28429c5765b34637ba06927252f6c8707e55923765c4e0bacfa6.JPG",
        "高価格AI確認画像.jpg": "embedded\u002Ff829fa6f5d932302b039f67561c1a0564c35077a73826a47b88b7f8efa55d827.jpg"
      },
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "AIorNot"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "",
          "content": ""
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "実験・調査の実施に支障のある大きな問題が生じた",
              "coding": "BigTRO"
            },
            {
              "label": "実験・調査の実施に支障のない程度の問題が生じた",
              "coding": "SmalTRO"
            },
            {
              "label": "実験・調査の実施に問題はなかった",
              "coding": "NoTRO"
            }
          ],
          "label": "実験・調査を実施する上でなにか問題はありませんでしたか？",
          "help": "例えば、プログラムの誤動作、来客や電話などの妨害、説明が分からなかったなども「問題」としてお答えください。",
          "name": "Problem"
        },
        {
          "required": false,
          "type": "textarea",
          "label": "問題の内容",
          "help": "「実験・調査の実施に支障のある大きな問題が生じた」または「実験・調査の実施に支障のない程度の問題が生じた」とご回答くださった方は、その内容を以下に記入してください。",
          "name": "ErrorReport"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ→",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Error"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "データの除外を希望しますか？",
          "content": "今回ご提供いただいたデータは、研究発表などの学術利用に活用させていただく予定です。何らかの理由（同意を撤回したい、問題があったので除外してほしいなど）でデータの除外を希望される方はお知らせください。"
        },
        {
          "required": true,
          "type": "radio",
          "options": [
            {
              "label": "はい、データを除外してください",
              "coding": "Nodata"
            },
            {
              "label": "いいえ、データを除外する必要はありません",
              "coding": "Usedata"
            }
          ],
          "name": "Exdata"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "次へ →",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Exclusion Data"
    },
    {
      "type": "lab.html.Page",
      "items": [
        {
          "type": "text",
          "title": "これで実験は終了です。「終わり」ボタンを押してください。ご協力ありがとうございました。"
        }
      ],
      "scrollTop": true,
      "submitButtonText": "終わり",
      "submitButtonPosition": "right",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "before:prepare": function anonymous(
) {
 //check Tardy
//ファイル名をランダムIDにする
const participantID = this.random.uuid4()

//csvファイルで保存する場合
const filename = participantID + "_data.csv"
const data = study.internals.controller.datastore.exportCsv();

fetch("https://pipe.jspsych.org/api/data/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  body: JSON.stringify({
    experimentID: "TXTvoNmHYcH2",
    filename: filename,
    data: data,
  }),
});

}
      },
      "title": "End",
      "tardy": true
    }
  ]
})

// Let's go!
study.run()