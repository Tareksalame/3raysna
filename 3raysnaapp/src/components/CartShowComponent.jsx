import React from 'react'

export default function CartShowComponent(props) {


    const AdditionsArr = ()=>
    {
        return props.val.additions.map((addition)=>
        {
            return <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}> <img style={{marginLeft:'10%'}} width={'5%'} src={addition.YesNo} alt="YesNo" /> <h6>----------</h6><h6 style={{marginRight:'10%'}}>{addition.add}</h6></div>
        })
    }
  return (
    <div className='CartShowComponent' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'row-reverse',justifyContent:'space-around',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <h5>الوجبة</h5>
        <h2>{props.val.name}</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <h5>سعر الوحدة</h5>
        <h2>{props.val.price}</h2>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
        <h5>الكمية</h5>
        <h2>{props.val.count}</h2>
        </div>
        </div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
            {AdditionsArr()}
        </div>
    </div>
  )
}
