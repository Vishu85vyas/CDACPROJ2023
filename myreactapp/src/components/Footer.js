import React from 'react'


function Footer() {
    const divStyle = {
        backgroundColor : '#FBE9E7'

            // '#D8BFD8'
    };
  return (
    <div>
        <div class = "text-black pt-5 pb-4" style= {divStyle}>
            <div class = "container text-center text-md-left">
                <div class = "row text-center text-md-left">
                <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 class = "mb-4 font-weight-bold text-success" >EasyStay</h5>
                    </div>
                    <div class = "col-md-2 col-lg-2 mx-auto mt-3">
                            <h5 class = "text-uppercase mb-4 font-weight-bold text-warning">Documentation</h5>
                         <p>
                            <a href = "https://www.figma.com/file/IC2CSnJOxFuaSpcrGHb0ct/easyStay?type=design&node-id=0%3A1&mode=design&t=xE0ZGQPAYBxkG5TJ-1" class = "text-black"> UI/UX Design</a>
                         </p>
                         <p>
                            <a href = "https://docs.google.com/document/d/18x4DwMBEinUwAwsA0FFV1XcqemqmEaiIn6o-CNoZJPA/edit?usp=sharing" class = "text-black"> Documents</a>
                         </p>
                         <p>
                            <a href = "https://drive.google.com/file/d/1JYgIiPx6Vb0Zk97SKzSSB6nUpYP6i5Y5/view" class = "text-black"> ER Diagram </a>
                         </p>
                         <p>
                            <a href = "https://drive.google.com/drive/folders/1Mi-XHYGhEIwcoeUeywMPWzUnZyZfHLLo?usp=sharing" class = "text-black"> Use Case</a>
                         </p>
                        </div>
                        <div class = "col-md-2 col-lg-2 mx-auto mt-3">
                            <h5 class = "text-uppercase mb-4 font-weight-bold text-warning">Pages</h5>
                         <p>
                            <a href = "#" class = "text-black"> About Us</a>
                         </p>
                         <p>
                            <a href = "#" class = "text-black"> Contact Us</a>
                         </p>
                         <p>
                            <a href = "#" class = "text-black"> Home</a>
                         </p>
                         <p>
                            <a href = "#" class = "text-black"></a>
                         </p>
                        </div>
                        <div class = "col-md-4 col-lg-3 mx-auto mt-3">
                            <h5 class = "text-uppercase mb-4 font-weight-bold text-warning"> Contact </h5>
                            <p>
                            <i class="fas fa-home md-3"></i> New York, NY 2333, US
                            </p>
                            <p>
                            <i class="fas fa-envelope"></i> theprovider@gmail.com
                            </p>
                            <p>
                            <i class="fas fa-phone"></i>  +92 997440022
                            </p>
                            <p>
                            <i class="fas fa-print"></i>+01 335 633 77
                            </p>
                        </div>
                        <hr class = "mb-4"/>
                        <div class = "col-md-7 col-lg-8">
                            <p> Copyright ©2020 All rights reserved by :
                                 <a href = "#">
                                    <strong class = "text-warning">EasyStay</strong>
                                 </a>
                            </p>
                        </div>
                        <div class = "col-md-5 col-lg-4">
                            <div class = "text-center text-md-right">
                               <ul class = "list-unstyled list-inline">
                                <li class ="list-inline-item">
                                   <a href="#" class = "btn-floating btn-sm text">
                                    <i class = "fab fa-facebook"></i>
                                   </a>
                                </li>
                                <li class ="list-inline-item">
                                   <a href="#" class = "btn-floating btn-sm text">
                                    <i class = "fab fa-twitter"></i>
                                   </a>
                                </li>
                                <li class ="list-inline-item">
                                   <a href="#" class = "btn-floating btn-sm text">
                                    <i class = "fab fa-google-plus"></i>
                                   </a>
                                </li>
                                <li class ="list-inline-item">
                                   <a href="#" class = "btn-floating btn-sm text">
                                    <i class = "fab fa-linked-in"></i>
                                   </a>
                                </li>
                                <li class ="list-inline-item">
                                   <a href="#" class = "btn-floating btn-sm text">
                                    <i class = "fab fa-youtube"></i>
                                   </a>
                                </li>
                               </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Footer