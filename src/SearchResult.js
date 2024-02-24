const VideoCards = document.querySelector("#Video-Section");


let Searchedresult = (items) => {

    // const items =  data.items;
    console.log("display function:")
    console.log(items)

   



    VideoCards.innerHTML = items.map((item) => {
        let videoID = item.id.videoId;
        item = item.snippet
        const { thumbnails: { medium: { width, height } },title, channelTitle } = item;

        let Url = `https://www.youtube.com/embed/${videoID}`;

      
        return `<div>
        <iframe width="${width}" height="${height}" src="${Url}" frameborder="0"  allowfullscreen></iframe>
       
       <div class="Card-Details"> <div><img src="https://yt3.ggpht.com/ytc/AIf8zZTpleSSUSKwNgK8auGxCQ5V6u3NgmCenB9HxYRFdyND7-jZ76stvzm8xPEeyuLN=s88-c-k-c0x00ffffff-no-rj" height="32px" width="32px"style="border-radius:20px;"></div>
        
       <div><a href="">${title}</a>

        <p>${channelTitle}</p></div></div></div> `
    }).join("");


}

export default Searchedresult;