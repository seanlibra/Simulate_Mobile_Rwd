<template>
  <div class="phone_root">
    <div class="phone_container">
      <div class="phone_content">
          <div class="top_menu">
              <img class="logo" src="https://i.imgur.com/szOtHvj.png" alt="">
              <div class="tools_container">
                  <div class="coin_container">
                      <span class="coin">¥ 89963.58</span>
                      <a class="reset" href="#"></a>
                  </div>
                  <a class="more" href="#"></a>
              </div>
          </div>
          <div class="main_menu">
            <ul>
                <li>
                    <a href="#">今日</a>
                </li>
                <li>
                    <a href="#">早盘</a>
                </li>
                <li>
                    <a href="#">滚球</a>
                </li>
                <li>
                    <a href="#">串关</a>
                </li>
            </ul>
          </div>
          <div class="date_container">
              <ul v-dragscroll="true" class="date_list">
                  <li v-for="(item, index) in date_list" :key="index">
                      <a href="#">{{item}}</a>
                  </li>
              </ul>
          </div>
          <div class="sports_container">
              <ul v-dragscroll="true" class="sports_list" >
                  <li v-for="(item, index) in sport_list" :key="index">
                      <a @click.prevent="" href="#">
                          <img :src="item.img">
                          <span class="title">{{item.name}}</span>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="cpt_container">
              <a href="#" @click.prevent="" class="cpt"></a>
          </div>
          <div class="streamer_container">
              <div class="header">
                  <div class="title">
                      <img src="https://i.imgur.com/xTDyVtC.png">
                      <span>在线主播</span>
                  </div>
                  <div class="more">
                      <span>更多</span>
                      <a class="arrow" href="#">
                        <img src="https://i.imgur.com/3lDwiUO.png" alt="">
                      </a>
                  </div>
              </div>
              <ul v-dragscroll="true" class="streamer_list">
                  <li v-for="(item, index) in streamer" :key="index">
                     <a href="" @click.prevent="">
                        <div class="profile_container">
                            <img class="profile" :src="item.profile" alt="">
                            <span class="status">{{item.status}}</span>
                        </div>
                        <span class="name">{{item.name}}</span>
                     </a>
                  </li>
              </ul>
          </div>
          <div class="race_container">
            <ul class="race_list">
                <li v-for="(race, index) in race_list" :key="index">
                    <div class="race_header">
                        <span class="race_title">{{race.name}}</span>
                        <a class="arrow" href="#">
                            <img src="https://i.imgur.com/3lDwiUO.png" alt="">
                        </a>
                    </div>
                    <ul class="race_of_games">
                        <li class="game" v-for="(game, index) in race.games" :key="index">
                            <div class="game_header">
                                <div class="l_bk">
                                    <a class="pinned" href="#"><span class="far fa-star"></span></a>
                                    <span class="game_title">{{game.name}}</span>
                                    <span class="game_start">{{game.start_time}}</span>
                                </div>
                                <div class='r_bk'>
                                    <span>55+</span>
                                    <a class="arrow" href="#">
                                        <img src="https://i.imgur.com/3lDwiUO.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <div v-if="game.streamer_living" class="game_situation">
                              <div class="player">
                                <img :src="game.player1.flag" alt="">
                                <span>{{game.player1.name}}</span>
                              </div>
                              <div class="score">
                                <span>
                                  {{game.player1.score}} - {{game.player2.score}}
                                </span>
                              </div>
                              <div class="player">
                                <img :src="game.player2.flag" alt="">
                                <span>{{game.player2.name}}</span>
                              </div>
                            </div>
                            <div class="game_info">
                                <div class="l_bk">
                                    <template v-if="!game.streamer_living">
                                    <div class="player">
                                      <div class="player_info">
                                        <img :src="game.player1.flag" alt="">
                                        <span>{{game.player1.name}}</span>
                                      </div>
                                        <span class="score">{{game.player1.score}}</span>
                                    </div>
                                    <div class="player">
                                        <div class="player_info">
                                          <img :src="game.player2.flag" alt="">
                                          <span>{{game.player2.name}}</span>
                                        </div>
                                        <span class="score">{{game.player2.score}}</span>
                                    </div>
                                    <div class="media_group">
                                        <a href="#">
                                            <img src="https://i.imgur.com/PtTvjw4.png" alt="">
                                        </a>
                                        <a href="#">
                                            <img src="https://i.imgur.com/eoptpEb.png" alt="">
                                        </a>
                                    </div>
                                    </template>
                                    <template v-if="game.streamer_living">
                                      <a class="streamer" href="#" :style="`background:url(${game.streamer_info.profile})`">
                                          <div class="more">点击查看</div>
                                          <div class="streamer_info">
                                              <span>{{game.streamer_info.name}}</span>
                                              <img :src="game.streamer_info.media" alt="">
                                          </div>
                                      </a>
                                    </template>
                                </div>
                                <div v-dragscroll="true" class="r_bk">
                                    <ul class="games_status_list">
                                        <li v-for="(status, index) in game.games_status" :key="index">
                                            <div class="games_status_title">{{status.status_title}}</div>
                                            <ul class="status_item_list">
                                                <li :class="{ hand : game.games_status.length > 3 }" v-for="(item, index) in status.status_list" :key="index">
                                                    <span class="name">{{item.name}}</span>
                                                    <span class="score" :class="{ arrow:item.arrow , red : item.status == 2 , green : item.status == 1 }">{{item.score}}</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <span class="more_arrow" v-if="game.games_status.length > 3 ">
                                    <img src="https://i.imgur.com/VQ2amjN.png" alt="">
                                </span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
          </div>
          <div class="footer">
              <ul class="footer_tool_list">
                  <li>
                      <a href="#">
                          <img src="https://i.imgur.com/zhWXVph.png" alt="">
                          <span>大厅</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="https://i.imgur.com/3JHchge.png" alt="">
                          <span>主播赛事</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="https://i.imgur.com/oXR9Xk3.png" alt="">
                          <span>排行</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="https://i.imgur.com/PuND6qM.png" alt="">
                          <span>投注纪录</span>
                      </a>
                  </li>
                  <li>
                      <a href="#">
                          <img src="https://i.imgur.com/fzj3Huh.png" alt="">
                          <span>我的</span>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Phone',
  data () {
    return {
      mouse_is_down: false,
      date_list: [
        '今日', '3/05', '3/06', '3/07', '3/08', '3/09'
      ],
      sport_list: [
        {
          name: '手球',
          img: 'https://i.imgur.com/1Tq6SgW.png'
        },
        {
          name: '足球',
          img: 'https://i.imgur.com/J3cVFgA.png'
        },
        {
          name: '篮球',
          img: 'https://i.imgur.com/1Xqn2pG.png'
        },
        {
          name: '排球',
          img: 'https://i.imgur.com/OW1LMBD.png'
        },
        {
          name: '兵乓球',
          img: 'https://i.imgur.com/TMenX7S.png'
        },
        {
          name: '网球',
          img: 'https://i.imgur.com/LXr09Ff.png'
        }
      ],
      streamer: [
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/69z0kSA.jpg',
          status: 'Living'
        },
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/4lKI5oe.jpg',
          status: 'Living'
        },
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/0o6IkQN.jpg',
          status: 'Living'
        },
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/iMBKFuz.jpg',
          status: '直播中'
        },
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/b2qbB8D.jpg',
          status: '直播中'
        },
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/4lKI5oe.jpg',
          status: '直播中'
        },
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/69z0kSA.jpg',
          status: 'Living'
        },
        {
          name: 'KIMI',
          profile: 'https://i.imgur.com/b2qbB8D.jpg',
          status: 'Living'
        }
      ],
      race_list: [
        {
          name: '美州冠军联赛',
          games: [
            {
              name: '上半场',
              pinned: false,
              start_time: '02:23',
              streamer_living: false,
              player1: {
                flag: 'https://i.imgur.com/HZp8chV.png',
                name: '亚特兰大联',
                score: 2
              },
              player2: {
                flag: 'https://i.imgur.com/4wXJq3o.png',
                name: '莫塔瓜',
                score: 0
              },
              games_status: [
                {
                  status_title: '全场独赢',
                  status_list: [
                    {
                      name: '主胜',
                      score: 3.25,
                      status: 0,
                      arrow: false
                    },
                    {
                      name: '客胜',
                      score: 3.45,
                      status: 2,
                      arrow: true
                    },
                    {
                      name: '和局',
                      score: 2.25,
                      status: 1,
                      arrow: true
                    }
                  ]
                },
                {
                  status_title: '全场让球',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                },
                {
                  status_title: '全场大小',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                }
              ]
            },
            {
              name: '下半场',
              pinned: false,
              start_time: '02:23',
              streamer_living: true,
              streamer_info: {
                name: '米ㄦ',
                profile: 'https://i.imgur.com/HYprtyY.jpg',
                media: 'https://i.imgur.com/SELLV3E.png'
              },
              player1: {
                flag: 'https://i.imgur.com/HZp8chV.png',
                name: '亚特兰大联',
                score: 2
              },
              player2: {
                flag: 'https://i.imgur.com/4wXJq3o.png',
                name: '莫塔瓜',
                score: 0
              },
              games_status: [
                {
                  status_title: '全场独赢',
                  status_list: [
                    {
                      name: '主胜',
                      score: 3.25,
                      status: 0,
                      arrow: false
                    },
                    {
                      name: '客胜',
                      score: 3.45,
                      status: 2,
                      arrow: true
                    },
                    {
                      name: '和局',
                      score: 2.25,
                      status: 1,
                      arrow: false
                    }
                  ]
                },
                {
                  status_title: '全场让球',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                },
                {
                  status_title: '全场大小',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                },
                {
                  status_title: '全场大小',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                },
                {
                  status_title: '全场让球',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                }
              ]
            },
            {
              name: '下半场',
              pinned: false,
              start_time: '02:23',
              streamer_living: true,
              streamer_info: {
                name: '米ㄦ',
                profile: 'https://i.imgur.com/Fsnrx6M.jpg',
                media: 'https://i.imgur.com/SELLV3E.png'
              },
              player1: {
                flag: 'https://i.imgur.com/HZp8chV.png',
                name: '亚特兰大联',
                score: 2
              },
              player2: {
                flag: 'https://i.imgur.com/4wXJq3o.png',
                name: '莫塔瓜',
                score: 0
              },
              games_status: [
                {
                  status_title: '全场独赢',
                  status_list: [
                    {
                      name: '主胜',
                      score: 3.25,
                      status: 0,
                      arrow: false
                    },
                    {
                      name: '客胜',
                      score: 3.45,
                      status: 2,
                      arrow: true
                    },
                    {
                      name: '和局',
                      score: 2.25,
                      status: 1,
                      arrow: false
                    }
                  ]
                },
                {
                  status_title: '全场让球',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                },
                {
                  status_title: '全场大小',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                },
                {
                  status_title: '全场大小',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                },
                {
                  status_title: '全场让球',
                  status_list: [
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    },
                    {
                      name: '-0.5/1',
                      score: 1.94,
                      status: 0
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted () {
    const arrayLike = document.getElementsByTagName('A')
    const newArray = [...arrayLike]
    newArray.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault()
      })
    })
  }
}
</script>

<style scoped>
.phone_root {
    color:rgba(61,63,71);
    background: #333;
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "PingFang SC", "Helvetica Neue", Helvetica, "Nimbus Sans L", Arial, "Liberation Sans", "Hiragino Sans GB", "Source Han Sans CN Normal", "Microsoft YaHei", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimHei, "WenQuanYi Zen Hei Sharp", sans-serif;
}
.phone_container {
   width: 375px;
   height:667px;
   background: #111;
   border-radius: 30px;
   padding: 40px 10px 70px 10px;
}
.phone_content {
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    background:#ffffff;
}
.phone_content::-webkit-scrollbar {
    display: none;
}
.top_menu {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
}
.top_menu .logo {
    height:35px;
}
.tools_container {
    display: flex;

}
.coin_container {
    display: flex;
    align-self: center;
    justify-self: center;
}
.coin_container .coin {
  font-family: 'DINPro Bold';
  font-size: 1.2rem;
  color:rgba(79,130,244,1);
  margin-right:10px;
}
.coin_container .reset {
    background: url('https://i.imgur.com/GbpjE8u.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    align-self: center;
    width: 20px;
    height:20px;
    margin-right:20px;
}
.tools_container .more {
    background: url('https://i.imgur.com/yy1b95E.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
    width: 20px;
    height:20px;
    align-self: center;
}
.phone_content .main_menu {
    background: #f5f6fa;
}
.phone_content .main_menu ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items:center;
    margin: 0;
    padding: 8px 0;
}
.phone_content .main_menu ul li a{
    text-decoration: none;
    font-size: 1.1rem;
    font-family: PingFangSC-Regular, sans-serif;
    transition: all .3s;
    color:inherit;
}
.phone_content .main_menu ul li a:hover {
    color:rgba(79,130,244)
}
.date_container .date_list {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 5px 0;
    overflow-x: auto;
    border-bottom: 1px solid #f5f6fa;
}
.date_container .date_list::-webkit-scrollbar {
  display: none;
}
.date_container .date_list li {
    min-width: 70px;
    display: flex;
    justify-content: center;
    align-self: center;
}
.date_container .date_list a {
    text-decoration: none;
    padding: 5px 0;
    font-size: 1.1rem;
    line-height: 1.1rem;
    color:rgba(164,169,180);
    transition: all .3s;
}
.date_container .date_list a:hover {
    color:inherit
}
.sports_list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 10px 0;
  overflow-x: auto;
}
.sports_list::-webkit-scrollbar {
  display: none;
}
.sports_list a{
  width: 60px;
  margin: 0 5px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items:center;
  border:1px solid #ffffff;
  transition: all .3s;
  border-radius: 10px;
}
.sports_list a:hover {
  border:1px solid rgba(79,130,244);
  box-shadow: rgba(79,130,244) 0px 0px 5px 0px;
}
.sports_list a:hover .title {
 color:rgba(61,63,71);
}
.sports_list a img {
  width: 30px;
  height: 30px;
  padding: 5px 0;
}
.sports_list a .title {
  font-size:1.1rem;
  transition: all .3s;
  color:rgba(164,169,180);
}
.cpt {
    display: block;
    height:50px;
    background: url('https://i.imgur.com/Vv94wEh.png');
    background-size: cover;
    background-repeat: no-repeat;
}
.streamer_container .header{
  display: flex;
  justify-content: space-between;
  margin: 10px 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #dcdcdc;
}
.streamer_container .header .title {
    display: flex;
}
.streamer_container .header .title img{
  height: 25px;
  margin-right: 5px;
}
.streamer_container .header .title span {
  font-size: 1.1rem;
}
.streamer_container .header .more {
    display: flex;
    align-items: center;
    color:rgba(126,137,166)
}
.streamer_container .header .more span {
    margin-right: 10px;
}
.streamer_container .header .more .arrow {
    transform: translateY(1px);
}
.streamer_list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  overflow-x: auto;
}
.streamer_list::-webkit-scrollbar {
  display: none;
}
.streamer_list li {
  margin: 0 10px;
}
.streamer_list a {
  text-decoration: none;
}
.streamer_list .profile_container .profile{
  width:75px;
  height:75px;
  border-radius: 50%;
  border:4px solid #ff008a;
}
.streamer_list .profile_container .status {
  background: #ff008a;
  color:#ffffff;
  padding: 3px 3px;
  border-radius: 5px;
  position: relative;
  top:-10px;
  letter-spacing: 1px;
  outline: 2px solid #ffffff;
}
.streamer_list .name {
    font-size: 1.1rem;
    color:#4a4a4a;
    position: relative;
    top:-5px;
}
.race_list {
  margin: 0;
  padding: 0 5px;
  list-style: none;
  border-top:5px solid #ddecfd;
  border-bottom: 5px solid #f8dadd;
}
.race_list .race_header {
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-bottom: 1px solid #dcdcdc;
}
.race_list .race_header .arrow {
    transform: rotate(90deg) translateY(5px);
}
.race_list .race_title {
  color:rgba(61,63,71)
}
.race_of_games {
  margin: 0;
  padding: 0;
  list-style: none;
}
.race_of_games .game_situation {
  padding-top:10px ;
  display: flex;
  justify-content: space-around;
}
.race_of_games .game_situation .player  {
  display: flex;
  align-items: center;
}
.race_of_games .game_situation .player:last-child {
  flex-direction: row-reverse;
}
.race_of_games .game_situation  .score {
  display: flex;
  font-family: 'DINPro Bold';
  font-size: 1.2rem;
  color:rgba(79,130,244,1);
}
.race_of_games .game_situation .player img {
  height:25px;
  margin: 0 10px;
}
.race_of_games li .game_header {
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
}
.race_of_games li:first-child .game_header {
  border-top: 0;
}
.race_of_games li .game_header .pinned , .race_of_games li .game_header .game_title , .race_of_games li .game_header .game_start  {
  color:rgba(126,137,166);
}
.race_of_games li .game_header .l_bk > a , .race_of_games li .game_header .l_bk > span {
  margin-right: 5px;
}
.race_of_games li .game_header .r_bk {
    display: flex;
    align-items: center;
}
.race_of_games li .game_header .r_bk span {
  color:rgba(126,137,166);
  margin-right: 10px;
}
.race_of_games li .game_header .r_bk .arrow {
    transform: translateY(1px);
}
.game_info {
  display: flex;
  padding: 10px 0;
  position: relative;
}
.game_info .media_group {
  position: absolute;
  bottom: 30px;
}
.game_info .media_group a {
    margin-right: 10px;
}
.game_info .l_bk {
  width: 35%;
  padding: 5px;
}
.game_info .l_bk .streamer {
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  height:100%;
  background-size: cover!important;
  background-position: center!important;
  text-decoration: none;
}
.game_info .l_bk .streamer .streamer_info {
    display: flex;
    padding: 0 5px;
    background: rgba(0,0,0,0.3);
    box-shadow:0 0 5px 1px rgba(0,0,0,0.3);
    /* position: absolute; */
}
.game_info .l_bk .streamer .streamer_info > span {
    color:#ffffff;
    width: 50%;
    display: flex;
}
.game_info .l_bk .streamer .streamer_info > img {
    width: 50%;
    object-fit: contain;
}
.game_info .l_bk .streamer .more {
    padding: 5px 0;
    color:rgba(144,177,255);
    background: rgba(0,0,0,0.7);
}
.game_info .l_bk .player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}
.game_info .l_bk .player .player_info {
  display: flex;
  align-items: center;
}
.game_info .l_bk .player img {
  height:25px;
  margin-right: 5px;
}
.game_info .l_bk .player .score {
  font-family: 'DINPro Bold';
  font-size: 1.2rem;
  color:rgba(79,130,244,1);
}
.game_info .r_bk {
  width: 65%;
  overflow-x: auto;
  position: relative;
}
.game_info .r_bk::-webkit-scrollbar {
  display: none;
}
.game_info .more_arrow {
  position: absolute;
  right:0;
  top:50%;
}
.game_info .more_arrow img {
    height:20px;
}
.games_status_list {
 margin: 0;
 padding: 0;
 list-style: none;
 display: flex;
 width: 100%;
}
.games_status_list > li {
  min-width: 33.3%;
  min-height: 200px;
}
.games_status_list li .games_status_title {
  background: #f7f8fc;
  margin-bottom: 5px;
  margin-right: 5px;
  padding: 5px 0;
}
.status_item_list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  min-height:180px;

}
.status_item_list li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background:#f7f8fc;
  margin-bottom: 5px;
  margin-right: 5px;
  flex-grow: 1;
}
.status_item_list > li.hand {
  cursor: grab;
}
.status_item_list li .name {
  color:rgba(126,137,166);
  font-family:'DINPro Bold';
}
.status_item_list li .score {
  font-family:'DINPro Bold';
  position: relative;
}
.status_item_list li .score.red {
    color:#ff0101;
}
.status_item_list li .score.red.arrow::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #ff0101;
    position: absolute;
    left:5px;
    bottom: 5px;
}
.status_item_list li .score.green {
    color:#2cba1e;
}
.status_item_list li .score.green.arrow::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #2cba1e;
    position: absolute;
    left:5px;
    bottom: 5px;
}
.footer_tool_list {
    list-style: none;
    display: flex;
    padding: 10px;
    margin: 0;
    border:1px solid #dadada;
    box-shadow: #dadada 0px 0px 5px 0px;
    border-radius: 20px;
}
.footer_tool_list li {
    flex-grow: 1;
    margin: 0 10px;
}
.footer_tool_list li a {
    display: flex;
    flex-direction: column;
    color: #dadada;
    text-decoration: none;
}
.footer_tool_list li:first-child a {
   color:rgba(79,130,244,1);
}
.footer_tool_list li img {
    height: 30px;
    object-fit: contain;
    object-position: center;
}
</style>
