


// ####################################### DEFAULT  VIDEO FETCH #########################################

let FetchVideos =  async ()=>{
    
    const apiKey = 'AIzaSyD8weTwiVeeE22DFs4sLqcW9vNGeEdz6fc';
    const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=40&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return data;
}





// ########################################## SEARCHED VIDEO FETCH #############################################


let FetchSearchedVideos = async(searchQuery)=>{

    const apiKey = 'AIzaSyD8weTwiVeeE22DFs4sLqcW9vNGeEdz6fc';
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&type=video&maxResults=40&key=${apiKey}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // console.log(data)

    return data;

}

export {FetchVideos,FetchSearchedVideos};