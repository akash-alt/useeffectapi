import React , {useEffect, useState} from "react"

const UseEffectAPI = ()=>{

  // we used async for the fetching the data
// when we check the data and see in the console (pending) then it means it's corect
// (pending) means data dont know ... it fill or not promise
//(await) we used for the filled the promise
//---------------------------------fetching data---------------

  const [users,setusers] = useState([])
  const getUsers = async() =>{
        const response = await fetch("https://api.github.com/users");
        //const data = await response.json();
         setusers(await response.json())    
  }

  // when we used (useEffect) ...1st we have to define useEffect
   useEffect(()=>{
        getUsers()
   },[])
//----------------------------------------end ------------------------ 
// we used (.map) method for the accesing of the dynamic data 
    return(
      <>
          <h2>List of Github Users</h2>
              <div className="container-fluid mt-5">
                <div className="row text-center">

                {
                    users.map((curElm) =>{
                        return(                         
                  <div className="col-10 col-md-4 mt-5" key={curElm.id}>
                    <div className="card p-2">
                          <div className="d-flex align-items-center">
                            <div className="image"><img src={curElm.avatar_url} className="rounded" width="120" /></div> 
                              <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft"> {curElm.login} </h4><span className="textLeft">{curElm.title}</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                  <div className="d-flex flex-column"> <span className="articles" >Articles </span><span className="number">38</span></div>
                                  <div className="d-flex flex-column"> <span className="followers" >Followers </span><span className="number">980</span></div>
                                  <div className="d-flex flex-column"> <span className="rating" >Rating </span><span className="number">8.9</span></div>
                                  <div className=""></div>
                                </div>
                                </div>                                              
                          </div>
                    </div>
                  </div>
                        )
                    })
                }



                  <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                          <div className="d-flex align-items-center">
                            <div className="image"><img src={""} className="rounded" width="155" /></div> 
                              <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft"> login </h4><span className="textLeft">web developer</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                  <div className="d-flex flex-column"> <span className="articles" >Articles </span><span className="number">38</span></div>
                                  <div className="d-flex flex-column"> <span className="followers" >Followers </span><span className="number">980</span></div>
                                  <div className="d-flex flex-column"> <span className="rating" >Rating </span><span className="number">8.9</span></div>
                                  <div className=""></div>
                                </div>
                                </div>                                              
                          </div>
                    </div>
                  </div>
                  <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                          <div className="d-flex align-items-center">
                            <div className="image"><img src={""} className="rounded" width="155" /></div> 
                              <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft"> login </h4><span className="textLeft">web developer</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                  <div className="d-flex flex-column"> <span className="articles" >Articles </span><span className="number">38</span></div>
                                  <div className="d-flex flex-column"> <span className="followers" >Followers </span><span className="number">980</span></div>
                                  <div className="d-flex flex-column"> <span className="rating" >Rating </span><span className="number">8.9</span></div>
                                  <div className=""></div>
                                </div>
                                </div>                                              
                          </div>
                    </div>
                  </div>

                 

                  <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                          <div className="d-flex align-items-center">
                            <div className="image"><img src={""} className="rounded" width="155" /></div> 
                              <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft"> login </h4><span className="textLeft">web developer</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                  <div className="d-flex flex-column"> <span className="articles" >Articles </span><span className="number">38</span></div>
                                  <div className="d-flex flex-column"> <span className="followers" >Followers </span><span className="number">980</span></div>
                                  <div className="d-flex flex-column"> <span className="rating" >Rating </span><span className="number">8.9</span></div>
                                  <div className=""></div>
                                </div>
                                </div>                                              
                          </div>
                    </div>
                  </div>

                  

                </div>

              </div>
      </>
    )
} 
export default UseEffectAPI;

//here is the basic code for the styling 
/*
                  <div className="col-10 col-md-4 mt-5">
                    <div className="card p-2">
                          <div className="d-flex align-items-center">
                            <div className="image"><img src={""} className="rounded" width="155" /></div> 
                              <div className="ml-3 w-100">
                                <h4 className="mb-0 mt-0 textLeft"> login </h4><span className="textLeft">web developer</span>
                                <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                  <div className="d-flex flex-column"> <span className="articles" >Articles </span><span className="number">38</span></div>
                                  <div className="d-flex flex-column"> <span className="followers" >Followers </span><span className="number">980</span></div>
                                  <div className="d-flex flex-column"> <span className="rating" >Rating </span><span className="number">8.9</span></div>
                                  <div className=""></div>
                                </div>
                                </div>                                              
                          </div>
                    </div>
                  </div>  */