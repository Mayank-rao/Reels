const reels = [
  {
    ismuted:true,
    slide: 1,
    username: "mayank_here",
    userProfile: "https://picsum.photos/seed/user1/200",
    caption: "Enjoying the sunset vibes 🌅 #travel",
    video: "1.mp4.mp4",
    likeCount: 1023,
    commentCount: 89,
    shareCount: 34,
    isFollowed: false
  },
  {
    ismuted:true,
    slide: 2,
    username: "tech_savage",
    userProfile: "https://picsum.photos/seed/user2/200",
    caption: "Coding never stops 💻🔥",
    video: "11.mp4",
    likeCount: 2540,
    commentCount: 310,
    shareCount: 72,
    isFollowed: true
  },
  {
     ismuted:true,
    slide: 3,
    username: "Mayan-kuu.Yadav",
    userProfile: "https://picsum.photos/seed/user3/200",
    caption: "Vibes only 🎧✨",
    video: "2.mp4.mp4",
    likeCount: 450,
    commentCount: 43,
    shareCount: 12,
    isFollowed: false
  },
  { ismuted:true,
    slide: 4,
    username: "fitness_freak",
    userProfile: "https://picsum.photos/seed/user4/200",
    caption: "Morning workout hits differently 💪🔥",
    video: "21.mp4",
    likeCount: 1900,
    commentCount: 120,
    shareCount: 65,
    isFollowed: true
  },
  { ismuted:true,
    slide: 5,
    username: "Mayan-kuu.Yadav",
    userProfile: "https://picsum.photos/seed/user5/200",
    caption: "Exploring the mountains 🏔️",
    video: "3.mp4.mp4",
    likeCount: 870,
    commentCount: 67,
    shareCount: 19,
    isFollowed: false
  },
  { ismuted:true,
    slide: 6,
    username: "chef_master",
    userProfile: "https://picsum.photos/seed/user6/200",
    caption: "Today's recipe: creamy pasta 🍝",
    video: "31.mp4",
    likeCount: 2034,
    commentCount: 145,
    shareCount: 98,
    isFollowed: true
  },
  { ismuted:true,
    slide: 7,
    username: "Mayan-kuu.Yadav",
    userProfile: "https://picsum.photos/seed/user7/200",
    caption: "Ready to feel the speed? 🏎️💨",
    video: "4.mp4.mp4",
    likeCount: 3100,
    commentCount: 230,
    shareCount: 120,
    isFollowed: false
  },
  { ismuted:true,
    slide: 8,
    username: "fashion_icon",
    userProfile: "https://picsum.photos/seed/user8/200",
    caption: "Street style drop today 👗🔥",
    video: "51.mp4",
    likeCount: 1250,
    commentCount: 98,
    shareCount: 40,
    isFollowed: true
  },
  { ismuted:true,
    slide: 9,
    username: "Mayan-kuu.Yadav",
    userProfile: "https://picsum.photos/seed/user9/200",
    caption: "Cutest moment of the day 🐶💖",
    video: "5.mp4.mp4",
    likeCount: 5400,
    commentCount: 675,
    shareCount: 210,
    isFollowed: false
  },
  { ismuted:true,
    slide: 10,
    username: "art_creator",
    userProfile: "https://picsum.photos/seed/user10/200",
    caption: "Making art from emotions 🎨",
    video: "11.mp4",
    likeCount: 330,
    commentCount: 22,
    shareCount: 5,
    isFollowed: false
  }
];

  var allreels = document.querySelector(".allreels")
function addData(){
  var sum='';

reels.forEach(function(elem,idx){    //playsinline  preload="auto"//for video audio playing instead of autoplay
    sum+=`<div class="reel">
                    <video autoplay loop ${elem.ismuted?'muted':''}  id="main-img" src="${elem.video}" ></video>
                      <div id="${idx}" class="mute"> ${elem.ismuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-fill"></i>'} </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
                        <h4>${elem.username}</h4>
                        <button>Follow</button>
                        </div>
                       <h3>${elem.caption}</h3>      
                    </div>
                    <div class="right">
                        <div id="${idx}" class="like">
                            <h4 class="like-icon"><${elem.isFollowed?'i class=" love ri-heart-3-fill"></i>' :'i class="ri-heart-line"}></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                         <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                         <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                         <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></i></h4>
                        </div>
                    </div>
                </div>`
  
    // console.log("hello")
})
  allreels.innerHTML= sum


}
addData();
allreels.addEventListener("click",function(dets){
if(dets.target.className=='like'){
    if(!reels[dets.target.id].isFollowed){
  reels[dets.target.id].likeCount++;
   reels[dets.target.id].isFollowed=true;
  }
  else{
     reels[dets.target.id].likeCount--;
      reels[dets.target.id].isFollowed=false;
  }
  addData();
}
if(dets.target.className=='mute'){
    if(!reels[dets.target.id].ismuted){
   reels[dets.target.id].ismuted=true;
  }
  else{
      reels[dets.target.id].ismuted=false;
  }
  addData();
}
  
})

  //for playing audio we did this
// videos.forEach(video => {
//     video.play().catch(() => {});
// });

// // Tap to enable audio
// videos.forEach(video => {
//     video.addEventListener("click", () => {
//         video.muted = false;
//         video.play();
//     });
// });

