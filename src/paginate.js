

const paginate = (Videos) => {
    
    const itemsPerPage = 10
    const numberOfPages = Math.ceil(Videos.length / itemsPerPage)
  
    const NewVideos = Array.from({ length: numberOfPages }, (_, index) => {
      
      const start = index * itemsPerPage
      return Videos.slice(start, start + itemsPerPage)
    })
    console.log(NewVideos)
    return NewVideos
  }
  
  export default paginate
  