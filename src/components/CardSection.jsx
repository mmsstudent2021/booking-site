import React from 'react'
import Card from './Card';

const CardSection = () => {
    const cards = [
        {   
            id: 1,
            img: "1.jpg",
            name: "Dennis Barrett",
            job: "UK Tourist Guide"
        },
        {   
            id: 2,
            img: "2.jpg",
            name: "Jacqueline Miller",
            job: "Us Tourist Guide"
        },
        {   
            id: 3,
            img: "3.jpg",
            name: "Larry Lawson",
            job: "Editor in Chief"
        },
        {   
            id: 4,
            img: "4.jpg",
            name: "Louis Ferguson",
            job: "CEO & Founder"
        },
        {   
            id: 5,
            img: "5.jpg",
            name: "Louis Crawford",
            job: "Editor, Coverage"
        },
        {   
            id: 6,
            img: "6.jpg",
            name: "Frances Guerrero",
            job: "Managing Editor"
        },
        {   
            id: 7,
            img: "7.jpg",
            name: "Amanda Reed",
            job: "Managing Editor"
        },
        {   
            id: 8,
            img: "8.jpg",
            name: "Samuel Bishop",
            job: "Co-Founder"
        },
        {   
            id: 9,
            img: "9.jpg",
            name: "Lori  Stevens",
            job: "Managing Editor"
        },
        {   
            id: 10,
            img: "10.jpg",
            name: "Billy Vasquez",
            job: "CTO"
        }
    ];
  return (
    <section className="container my-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {cards.map(({id,img,name,job}) => <Card key={id} img={img} name={name} job={job}/>)}
        </div>
      </section>
  )
}

export default CardSection