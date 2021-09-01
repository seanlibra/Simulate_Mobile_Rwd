<template>
  <div class="phone_root">
    <div class="phone_container">
      <div class="phone_content">
          <div class="top_menu">
              <img class="logo" src="https://i.imgur.com/szOtHvj.png" alt="">
              <div class="tools_container">
                  <div class="coin_container">
                      <span class="coin">89963.58</span>
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
              <ul class="date_list">
                  <li v-for="(item, index) in date_list" :key="index">
                      <a href="#">{{item}}</a>
                  </li>
              </ul>
          </div>
          <div class="sports_container">
              <ul class="sports_list">
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
                  </div>
              </div>
              <ul class="streamer_list">
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
                        <span>{{race.name}}</span>
                        <span>下拉</span>
                    </div>
                    <!-- <ul class="race_of_games">
                        <li class="game" v-for="(game, index) in race.games" :key="index">
                            <div class="game_header">
                                <div class="l_bk">
                                    <a href="#">星星</a>
                                    <span>{{game.name}}</span>
                                    <span>{{game.start_time}}</span>
                                </div>
                                <div class='r_bk'>
                                    <span>55+</span>
                                    <span>右邊</span>
                                </div>
                            </div>
                            <div class="game_info">
                                <div class="l_bk">
                                    <div class="player">
                                        <img :src="game.player1.flag" alt="">
                                        <span>{{game.player1.name}}</span>
                                        <span>{{game.player1.score}}</span>
                                    </div>
                                    <div class="player">
                                        <img :src="game.player2.flag" alt="">
                                        <span>{{game.player2.name}}</span>
                                        <span>{{game.player.score}}</span>
                                    </div>
                                </div>
                                <div class="r_bk">
                                    <ul class="games_status_list">
                                        <li v-for="(status, index) in games_status" :key="index">
                                            <div>{{stauts.status_title}}</div>
                                            <ul>
                                                <li v-for="(item, index) in status.status_list" :key="index">
                                                    <span>{{item.name}}</span>
                                                    <span>{{item.score}}</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul> -->
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
                      status: 0
                    },
                    {
                      name: '客胜',
                      score: 3.45,
                      status: 2
                    },
                    {
                      name: '和局',
                      score: 2.25,
                      status: 1
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
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.phone_root {
    background: #333;
    min-height: calc(100vh - 50px);
    display: flex;
    align-items: center;
    justify-content: center;
}
.phone_container {
   width: 360px;
   height:640px;
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
    font-family: 'PingFangSC-Regular, sans-serif';
    color:#4a4a4a
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
}
.sports_list a img {
  width: 30px;
  height: 30px;
  margin-bottom: 5px;
}
.sports_list a .title {
  color:#4a4a4a;
  font-size:1.1rem;
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
  padding: 1px 3px;
  border-radius: 5px;
  border:3px solid #ffffff;
  position: relative;
  top:-10px;
  letter-spacing: 1px;
  font-size: 0.9rem;
}
.streamer_list .name {
    font-size: 1.1rem;
    color:#4a4a4a;
}
.streamer_container .more {
}
</style>
