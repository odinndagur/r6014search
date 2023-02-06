let searchLastUpdate = 0;
let targetMaxInterval = 150;

async function getData(){
    data = await window.db.query('select name from person')
    console.log(data)
  }

  async function updateSearch(inp){
    let searchValue = inp.value
    if(true){
        searchValue = searchValue + "*"
    }
    videos = await window.db.query(`select * from video_search where video_search match "${searchValue}" order by rank, date`)
    videoEl = document.querySelector('.videos')
    videoEl.innerHTML = ''
    for(let video of videos){
      let el = document.createElement('div')
      el.classList.add('video')
      el.innerHTML = `
      <a href="${video.video_url}"><img src="${video.thumbnail}"/></a>
      <div class="video-text">
        <span class="video-band">${video.band}</span>
        <br/>
        <span class="video-venue">${video.venue_name}</span>
        <br/>
        <span class="video-date">${video.date}</span>
      </div>
      `
      videoEl.appendChild(el)
    }
    // searchLastUpdate = Date.now()
    // setTimeout(updateSearch(inp),150)
  }
