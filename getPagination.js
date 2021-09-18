let offset,limit,total; 

function getPagination(offset,limit,total){       
    var currentPage ;
    var totalPage = 0;
    var renderPages = [];
    if(offset === 0){
        currentPage = 1;
        totalPage = Math.floor(total/limit)+1;
        for(var firstpage  = 1;firstpage<=5;firstpage++){
            renderPages.push(firstpage);
        }
    }else{
        currentPage = Math.floor(offset/limit)+1;
        totalPage = Math.floor(total/limit)+1; 
        if(offset>=limit*Math.floor(totalPage/2)){
            if((currentPage+2)>=totalPage){
                for(var i = 0;i<5;i++){
                    renderPages =[totalPage-4,totalPage-3,totalPage-2,totalPage-1,totalPage]
                }
            }
            else{
                for(var i = 0;i<5;i++){
                    renderPages =[currentPage-2,currentPage-1,currentPage,currentPage+1,currentPage+2]
                }
            }           
                   
        }else{            
            for(var firstpage = 1;firstpage<=5;firstpage++){
                renderPages.push(firstpage);
            }
        }
    }
    return { 
      currentPage: currentPage, 
      totalPage: totalPage,
      renderPages: renderPages
    }
  }
  const { currentPage, totalPage, renderPages } = getPagination(offset,limit,total)
  
  getPagination(0, 5, 33) // { currentPage: 1, totalPage: 7, renderPages: [1,2,3,4,5] }
  getPagination(5, 5, 33) // { currentPage: 2, totalPage: 7, renderPages: [1,2,3,4,5] }
  getPagination(10, 5, 33) // { currentPage: 3, totalPage: 7, renderPages: [1,2,3,4,5] }
  getPagination(15, 5, 33) // { currentPage: 4, totalPage: 7, renderPages: [2,3,4,5,6] }
  getPagination(20, 5, 33) // { currentPage: 5, totalPage: 7, renderPages: [3,4,5,6,7] }
  getPagination(25, 5, 33) // { currentPage: 6, totalPage: 7, renderPages: [3,4,5,6,7] }  
  getPagination(30, 5, 33) // { currentPage: 7, totalPage: 7, renderPages: [3,4,5,6,7] }
  console.log(getPagination(0, 5, 33) );
  console.log(getPagination(5, 5, 33) );
  console.log(getPagination(10, 5, 33) );
  console.log(getPagination(15, 5, 33) );
  console.log(getPagination(20, 5, 33) );
  console.log(getPagination(25, 5, 33) );
  console.log(getPagination(30, 5, 33) );