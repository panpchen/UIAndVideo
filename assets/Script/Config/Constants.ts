export const STORY_DATA = {
  videoList: [5],
  titleList: ["A 放弃梦想,回家", "B 坚持梦想,寻求哥哥的帮助"],
  children: [
    {
      videoList: [1],
      titleList: ["A 继续努力练习,相信总会成功", "B 再去听听哥哥的意见吧"],
      children: [
        {
          videoList: [3, 2],
          titleList: ["A 去问问老师,看看有什么好方法", "B 只要努力,一定能行"],
          children: [
            {
              videoList: [4, 3, 6],
            },
            {
              videoList: [3, 4, 6],
            },
          ],
        },
        {
          videoList: [2, 4, 3, 6],
        },
      ],
    },
    {
      videoList: [2],
      titleList: ["A 寻求老师的意见", "B 继续努力努力,相信总会成功"],
      children: [
        {
          videoList: [4, 3, 6],
        },
        {
          videoList: [3, 4, 6],
        },
      ],
    },
  ],
};
