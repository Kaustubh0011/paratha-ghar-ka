"use client";

const reviews = [

{
name:"Rahul",
text:"Best homemade paratha near my college.",
},

{
name:"Priya",
text:"Fresh, hygienic and affordable.",
},

{
name:"Aman",
text:"Amazing taste. Definitely ordering again.",
},

];

export default function Reviews(){

return(

<section id="reviews" className="py-24 bg-[#fff3df]">

<div className="container">

<h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-center">

Customer Reviews

</h2>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

{reviews.map((review,index)=>(

<div key={index} className="card p-8">

<div className="text-yellow-500 text-2xl">

★★★★★

</div>

<p className="mt-6 text-gray-600">

"{review.text}"

</p>

<h3 className="mt-6 font-bold">

{review.name}

</h3>

</div>

))}

</div>

</div>

</section>

)

}