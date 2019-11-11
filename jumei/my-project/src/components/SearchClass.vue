<template>
  <div>
    <van-collapse v-model="activeName" accordion>
      <van-collapse-item v-for="(item,index) in data" :key="index"   class="list" :title="item.name" :name="index">
        <ul>
          <li v-for="(data,i) in item.sub_categories" :key="i" v-text="data.name" ></li>
        </ul>
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import Vue from "vue";
import { Collapse, CollapseItem } from "vant";
Vue.use(Collapse).use(CollapseItem);
export default {
  data() {
    return {
      activeName: "1",
    data: [
        {
            "category_id": 1,
            "name": "面部护肤",
            "sub_categories": [
                {
                    "category_id": 62,
                    "name": "眼部护理",
                    "sub_categories": [
                        {
                            "category_id": 2,
                            "name": "眼霜"
                        },
                        {
                            "category_id": 304,
                            "name": "睫毛护理"
                        },
                        {
                            "category_id": 362,
                            "name": "眼部精华"
                        },
                        {
                            "category_id": 363,
                            "name": "眼膜"
                        }
                    ]
                },
                {
                    "category_id": 10,
                    "name": "化妆水/爽肤水",
                    "sub_categories": [
                        {
                            "category_id": 79,
                            "name": "喷雾"
                        },
                        {
                            "category_id": 231,
                            "name": "纯露/花水"
                        },
                        {
                            "category_id": 264,
                            "name": "美容液"
                        },
                        {
                            "category_id": 346,
                            "name": "爽肤水"
                        }
                    ]
                },
                {
                    "category_id": 81,
                    "name": "啫哩/凝露/凝胶",
                    "sub_categories": [
                        {
                            "category_id": 116,
                            "name": "啫喱"
                        },
                        {
                            "category_id": 358,
                            "name": "凝露/凝胶"
                        }
                    ]
                },
                {
                    "category_id": 17,
                    "name": "精华",
                    "sub_categories": [
                        {
                            "category_id": 195,
                            "name": "原液"
                        },
                        {
                            "category_id": 352,
                            "name": "精华液/露"
                        },
                        {
                            "category_id": 470,
                            "name": "精华乳"
                        }
                    ]
                },
                {
                    "category_id": 16,
                    "name": "面霜",
                    "sub_categories": [
                        {
                            "category_id": 196,
                            "name": "按摩霜"
                        },
                        {
                            "category_id": 354,
                            "name": "面霜"
                        },
                        {
                            "category_id": 355,
                            "name": "日霜"
                        },
                        {
                            "category_id": 356,
                            "name": "晚霜"
                        }
                    ]
                },
                {
                    "category_id": 83,
                    "name": "唇部护理",
                    "sub_categories": [
                        {
                            "category_id": 229,
                            "name": "护唇膏"
                        },
                        {
                            "category_id": 365,
                            "name": "唇部去角质"
                        },
                        {
                            "category_id": 366,
                            "name": "唇膜"
                        },
                        {
                            "category_id": 367,
                            "name": "唇部精华"
                        }
                    ]
                },
                {
                    "category_id": 19,
                    "name": "洁面",
                    "sub_categories": [
                        {
                            "category_id": 241,
                            "name": "面部去角质/磨砂"
                        },
                        {
                            "category_id": 339,
                            "name": "洁面乳"
                        },
                        {
                            "category_id": 340,
                            "name": "洁面膏/霜"
                        },
                        {
                            "category_id": 341,
                            "name": "洁面啫哩/胶"
                        },
                        {
                            "category_id": 342,
                            "name": "洁面粉"
                        },
                        {
                            "category_id": 343,
                            "name": "洁肤皂"
                        },
                        {
                            "category_id": 345,
                            "name": "洁面摩丝"
                        }
                    ]
                },
                {
                    "category_id": 338,
                    "name": "T区/特殊护理",
                    "sub_categories": [
                        {
                            "category_id": 245,
                            "name": "去黑头"
                        },
                        {
                            "category_id": 247,
                            "name": "药膏"
                        },
                        {
                            "category_id": 257,
                            "name": "鼻膜"
                        }
                    ]
                },
                {
                    "category_id": 14,
                    "name": "面膜",
                    "sub_categories": [
                        {
                            "category_id": 348,
                            "name": "面膜贴"
                        },
                        {
                            "category_id": 349,
                            "name": "水洗面膜"
                        },
                        {
                            "category_id": 350,
                            "name": "免洗面膜"
                        },
                        {
                            "category_id": 351,
                            "name": "撕拉面膜"
                        }
                    ]
                },
                {
                    "category_id": 9,
                    "name": "乳液",
                    "sub_categories": [
                        {
                            "category_id": 353,
                            "name": "乳液"
                        }
                    ]
                },
                {
                    "category_id": 197,
                    "name": "精油",
                    "sub_categories": [
                        {
                            "category_id": 359,
                            "name": "基础精油"
                        },
                        {
                            "category_id": 360,
                            "name": "单方精油"
                        },
                        {
                            "category_id": 361,
                            "name": "复方精油"
                        }
                    ]
                },
                {
                    "category_id": 23,
                    "name": "护肤套装",
                    "sub_categories": [
                        {
                            "category_id": 443,
                            "name": "护肤套装"
                        }
                    ]
                }
            ]
        },
        {
            "category_id": 3,
            "name": "彩妆",
            "sub_categories": [
                {
                    "category_id": 386,
                    "name": "眼部",
                    "sub_categories": [
                        {
                            "category_id": 4,
                            "name": "眼影"
                        },
                        {
                            "category_id": 15,
                            "name": "眼线笔"
                        },
                        {
                            "category_id": 70,
                            "name": "眼线膏/胶"
                        },
                        {
                            "category_id": 283,
                            "name": "眼线液"
                        }
                    ]
                },
                {
                    "category_id": 383,
                    "name": "粉饼/散粉",
                    "sub_categories": [
                        {
                            "category_id": 20,
                            "name": "粉饼"
                        },
                        {
                            "category_id": 30,
                            "name": "散粉/蜜粉"
                        }
                    ]
                },
                {
                    "category_id": 388,
                    "name": "唇部",
                    "sub_categories": [
                        {
                            "category_id": 50,
                            "name": "唇彩/唇蜜"
                        },
                        {
                            "category_id": 174,
                            "name": "唇线笔"
                        },
                        {
                            "category_id": 228,
                            "name": "唇膏"
                        }
                    ]
                },
                {
                    "category_id": 387,
                    "name": "睫毛",
                    "sub_categories": [
                        {
                            "category_id": 58,
                            "name": "睫毛膏"
                        }
                    ]
                },
                {
                    "category_id": 384,
                    "name": "眉部",
                    "sub_categories": [
                        {
                            "category_id": 61,
                            "name": "眉粉"
                        },
                        {
                            "category_id": 128,
                            "name": "眉笔"
                        },
                        {
                            "category_id": 385,
                            "name": "眉膏"
                        }
                    ]
                },
                {
                    "category_id": 389,
                    "name": "美甲",
                    "sub_categories": [
                        {
                            "category_id": 67,
                            "name": "指甲油"
                        },
                        {
                            "category_id": 185,
                            "name": "洗甲水"
                        }
                    ]
                },
                {
                    "category_id": 55,
                    "name": "隔离",
                    "sub_categories": [
                        {
                            "category_id": 101,
                            "name": "防晒隔离"
                        },
                        {
                            "category_id": 374,
                            "name": "隔离乳/霜"
                        }
                    ]
                },
                {
                    "category_id": 38,
                    "name": "底妆",
                    "sub_categories": [
                        {
                            "category_id": 248,
                            "name": "粉底液"
                        },
                        {
                            "category_id": 379,
                            "name": "妆前乳/露"
                        },
                        {
                            "category_id": 380,
                            "name": "粉底霜"
                        },
                        {
                            "category_id": 381,
                            "name": "BB霜/CC霜"
                        }
                    ]
                },
                {
                    "category_id": 143,
                    "name": "遮瑕/修容",
                    "sub_categories": [
                        {
                            "category_id": 260,
                            "name": "遮瑕/修容膏"
                        },
                        {
                            "category_id": 382,
                            "name": "遮瑕笔"
                        }
                    ]
                },
                {
                    "category_id": 33,
                    "name": "防晒",
                    "sub_categories": [
                        {
                            "category_id": 305,
                            "name": "晒后修护"
                        },
                        {
                            "category_id": 375,
                            "name": "防晒乳液"
                        },
                        {
                            "category_id": 376,
                            "name": "防晒霜"
                        },
                        {
                            "category_id": 377,
                            "name": "防晒喷雾"
                        }
                    ]
                },
                {
                    "category_id": 18,
                    "name": "卸妆",
                    "sub_categories": [
                        {
                            "category_id": 368,
                            "name": "卸妆乳"
                        },
                        {
                            "category_id": 369,
                            "name": "卸妆油"
                        },
                        {
                            "category_id": 370,
                            "name": "卸妆液"
                        },
                        {
                            "category_id": 371,
                            "name": "卸妆霜"
                        },
                        {
                            "category_id": 372,
                            "name": "卸妆啫哩/凝露"
                        },
                        {
                            "category_id": 373,
                            "name": "卸妆洁面"
                        },
                        {
                            "category_id": 474,
                            "name": "眼唇卸妆"
                        }
                    ]
                },
                {
                    "category_id": 8,
                    "name": "腮红",
                    "sub_categories": [
                        {
                            "category_id": 442,
                            "name": "腮红"
                        }
                    ]
                },
                {
                    "category_id": 37,
                    "name": "彩妆套装",
                    "sub_categories": [
                        {
                            "category_id": 444,
                            "name": "彩妆套装"
                        }
                    ]
                }
            ]
        },
        {
            "category_id": 21,
            "name": "身体护理",
            "sub_categories": [
                {
                    "category_id": 198,
                    "name": "个人护理",
                    "sub_categories": [
                        {
                            "category_id": 85,
                            "name": "卫生用品"
                        },
                        {
                            "category_id": 277,
                            "name": "脱毛"
                        },
                        {
                            "category_id": 298,
                            "name": "香体类"
                        },
                        {
                            "category_id": 408,
                            "name": "私密护理"
                        },
                        {
                            "category_id": 468,
                            "name": "情趣用品"
                        },
                        {
                            "category_id": 475,
                            "name": "其他护理用品"
                        },
                        {
                            "category_id": 2254,
                            "name": "箱装纸巾"
                        },
                        {
                            "category_id": 2256,
                            "name": "纸巾"
                        }
                    ]
                },
                {
                    "category_id": 57,
                    "name": "润肤",
                    "sub_categories": [
                        {
                            "category_id": 88,
                            "name": "润肤乳"
                        },
                        {
                            "category_id": 95,
                            "name": "润肤霜"
                        },
                        {
                            "category_id": 473,
                            "name": "体膜/按摩霜"
                        },
                        {
                            "category_id": 2229,
                            "name": "身体喷雾"
                        }
                    ]
                },
                {
                    "category_id": 22,
                    "name": "纤体/美体",
                    "sub_categories": [
                        {
                            "category_id": 99,
                            "name": "美体"
                        },
                        {
                            "category_id": 134,
                            "name": "纤体"
                        }
                    ]
                },
                {
                    "category_id": 280,
                    "name": "手足护理",
                    "sub_categories": [
                        {
                            "category_id": 117,
                            "name": "护手霜"
                        },
                        {
                            "category_id": 405,
                            "name": "手部护理"
                        },
                        {
                            "category_id": 406,
                            "name": "足部护理"
                        }
                    ]
                },
                {
                    "category_id": 65,
                    "name": "护发",
                    "sub_categories": [
                        {
                            "category_id": 136,
                            "name": "护发精华"
                        },
                        {
                            "category_id": 393,
                            "name": "护发素/乳"
                        },
                        {
                            "category_id": 394,
                            "name": "发膜"
                        }
                    ]
                },
                {
                    "category_id": 54,
                    "name": "沐浴",
                    "sub_categories": [
                        {
                            "category_id": 303,
                            "name": "身体去角质/磨砂"
                        },
                        {
                            "category_id": 397,
                            "name": "身体清洁"
                        }
                    ]
                },
                {
                    "category_id": 122,
                    "name": "洗发",
                    "sub_categories": [
                        {
                            "category_id": 312,
                            "name": "洗发皂"
                        },
                        {
                            "category_id": 390,
                            "name": "洗发水"
                        },
                        {
                            "category_id": 392,
                            "name": "干洗喷雾"
                        }
                    ]
                },
                {
                    "category_id": 395,
                    "name": "美发造型",
                    "sub_categories": [
                        {
                            "category_id": 396,
                            "name": "美发造型"
                        }
                    ]
                },
                {
                    "category_id": 94,
                    "name": "口腔护理",
                    "sub_categories": [
                        {
                            "category_id": 400,
                            "name": "牙刷"
                        },
                        {
                            "category_id": 401,
                            "name": "牙膏/牙粉"
                        },
                        {
                            "category_id": 402,
                            "name": "漱口水"
                        }
                    ]
                },
                {
                    "category_id": 151,
                    "name": "颈部护理",
                    "sub_categories": [
                        {
                            "category_id": 403,
                            "name": "颈霜"
                        },
                        {
                            "category_id": 404,
                            "name": "颈膜"
                        }
                    ]
                },
                {
                    "category_id": 13,
                    "name": "身体护理套装",
                    "sub_categories": [
                        {
                            "category_id": 446,
                            "name": "身体护理套装"
                        }
                    ]
                }
            ]
        },
        {
            "category_id": 34,
            "name": "香水",
            "sub_categories": [
                {
                    "category_id": 35,
                    "name": "女士香水",
                    "sub_categories": [
                        {
                            "category_id": 168,
                            "name": "香膏"
                        },
                        {
                            "category_id": 410,
                            "name": "女士香水"
                        }
                    ]
                },
                {
                    "category_id": 309,
                    "name": "香水套装",
                    "sub_categories": [
                        {
                            "category_id": 445,
                            "name": "香水套装"
                        }
                    ]
                },
                {
                    "category_id": 53,
                    "name": "男士香水",
                    "sub_categories": [
                        {
                            "category_id": 449,
                            "name": "男士香水"
                        }
                    ]
                },
                {
                    "category_id": 89,
                    "name": "中性香水",
                    "sub_categories": [
                        {
                            "category_id": 450,
                            "name": "中性香水"
                        }
                    ]
                },
                {
                    "category_id": 100,
                    "name": "Q版香水",
                    "sub_categories": [
                        {
                            "category_id": 451,
                            "name": "Q版香水"
                        }
                    ]
                }
            ]
        },
        {
            "category_id": 417,
            "name": "男士护理",
            "sub_categories": [
                {
                    "category_id": 418,
                    "name": "男士护肤",
                    "sub_categories": [
                        {
                            "category_id": 420,
                            "name": "男士洁面"
                        },
                        {
                            "category_id": 421,
                            "name": "男士爽肤水"
                        },
                        {
                            "category_id": 422,
                            "name": "男士眼部护理"
                        },
                        {
                            "category_id": 423,
                            "name": "男士唇部护理"
                        },
                        {
                            "category_id": 424,
                            "name": "男士面膜"
                        },
                        {
                            "category_id": 425,
                            "name": "男士精华"
                        },
                        {
                            "category_id": 426,
                            "name": "男士啫哩/乳液/面霜"
                        },
                        {
                            "category_id": 476,
                            "name": "男士剃须用品"
                        }
                    ]
                },
                {
                    "category_id": 419,
                    "name": "男士身体护理",
                    "sub_categories": [
                        {
                            "category_id": 427,
                            "name": "男士洗护"
                        },
                        {
                            "category_id": 428,
                            "name": "男士身体护理"
                        }
                    ]
                },
                {
                    "category_id": 409,
                    "name": "男士套装",
                    "sub_categories": [
                        {
                            "category_id": 447,
                            "name": "男士套装"
                        }
                    ]
                }
            ]
        },
        {
            "category_id": 6,
            "name": "套装礼盒",
            "sub_categories": [
                {
                    "category_id": 155,
                    "name": "小样/旅行套装",
                    "sub_categories": [
                        {
                            "category_id": 448,
                            "name": "小样/旅行套装"
                        }
                    ]
                }
            ]
        },
        {
            "category_id": 77,
            "name": "美容工具",
            "sub_categories": [
                {
                    "category_id": 411,
                    "name": "护肤工具",
                    "sub_categories": [
                        {
                            "category_id": 452,
                            "name": "护肤工具"
                        }
                    ]
                },
                {
                    "category_id": 412,
                    "name": "彩妆工具",
                    "sub_categories": [
                        {
                            "category_id": 453,
                            "name": "彩妆工具"
                        }
                    ]
                },
                {
                    "category_id": 413,
                    "name": "美发工具",
                    "sub_categories": [
                        {
                            "category_id": 454,
                            "name": "美发工具"
                        }
                    ]
                },
                {
                    "category_id": 414,
                    "name": "美体工具",
                    "sub_categories": [
                        {
                            "category_id": 455,
                            "name": "美体工具"
                        }
                    ]
                },
                {
                    "category_id": 415,
                    "name": "美甲工具",
                    "sub_categories": [
                        {
                            "category_id": 456,
                            "name": "美甲工具"
                        }
                    ]
                },
                {
                    "category_id": 416,
                    "name": "其他美容工具",
                    "sub_categories": [
                        {
                            "category_id": 458,
                            "name": "其他美容工具"
                        }
                    ]
                }
            ]
        },
        {
            "category_id": 478,
            "name": "其他",
            "sub_categories": [
                {
                    "category_id": 481,
                    "name": "喜从盒来",
                    "sub_categories": [
                        {
                            "category_id": 482,
                            "name": "喜从盒来"
                        }
                    ]
                },
                {
                    "category_id": 483,
                    "name": "会员生日礼包",
                    "sub_categories": [
                        {
                            "category_id": 484,
                            "name": "会员生日礼包"
                        }
                    ]
                }
            ]
        }
    ]
    };
  },
  methods:{
 
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.list {
  ul {
    margin: -16px;
    position: relative;
    width: 110%;
    color: #666;
    li:nth-child(1) {
      margin-top: 0px;
    }
    li {
      height: 45px;
      width: 100%;
      background: #f5f5f5;
      margin-top: 2px;
      line-height: 45px;
    font-size: 14px;
    text-indent: 10%
    }
  }
}
</style>