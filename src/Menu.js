import React from 'react';

function Menu({items}) {
    return (
        <div className='section-center'>
            {
                items.map((items) =>{
                    const {id,title,price,img,desc}=items;
                    return(
                        <section className='menu-item' key={id}>
                            <img src={img} alt={title} className='photo' />
                            <div className='item-info'>
                                <header>
                                    <h4>{title}</h4>
                                    <h5>{price}</h5>
                                </header>
                                <p className='items-text'>{desc}</p>
                            </div>
                        </section>
                    )
                })
            }
            
        </div>
    );
}

export default Menu;
