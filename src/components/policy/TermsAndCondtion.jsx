import '../../CSS/condtion.css'
import React from 'react'

export const Condition = () => {
  return (
    <>
        
      <div class="condition">
        <div class="days">
          <img  src="https://img.freepik.com/free-vector/arrows-circle_23-2147503443.jpg?ga=GA1.1.262350446.1745860967&semt=ais_hybrid&w=740"   height="120px" width="120px" alt='sorry'></img>
          <h2>Easy Exchange Policy</h2>
          <p>We offer hassle free exchange policy</p>
        </div>

        <div class="months">
          <img src="https://cdn-icons-png.freepik.com/256/11181/11181371.png?ga=GA1.1.262350446.1745860967&semt=ais_hybrid"    height="120px" width="120px" alt='sorry'></img>
          <h2>7 Days Return Policy</h2>
          <p>We provide 7 days return policy</p>
        </div>

        <div class="privacy">
          <img  src="https://cdn-icons-png.freepik.com/256/13897/13897389.png?ga=GA1.1.262350446.1745860967&semt=ais_hybrid"alt='sorry' height="120px" width="120px"></img>
          <h2>Best Customer Support</h2>
          <p>We provide 24/7 customer support</p>
        </div>

    

      </div>
      <div class="subscribe">
          <h1>Subscribe now & get 20% off</h1>
         
         <form action="https://api.web3forms.com/submit" method="POST" /><input type="email" placeholder='Enter your email'></input><button>SUBSCRIBE</button>
        </div>
        <div>
          <marquee><h3>Thanks for spending your's  pricious time to visit and purchase a products  from website </h3></marquee>
        </div>


    </>
  )
}