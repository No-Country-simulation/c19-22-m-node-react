


export const Comentarios = () => {

      

  return (
      <section className='find accounts'>
        <div className="profilepic-nombre flex gap-2 items-center">
            <div className="para-recortar-foto w-[44px] h-[44px] overflow-hidden rounded-full">
                <img className='w-full h-full object-cover' src={commentElement.userpic} alt="" />
            </div>
            <div className="w-[230px]">
                <p className="text-sm"><strong className="text-sm">{commentElement.username}</strong>{` ${commentElement.content}`}</p>
            </div>                
        </div>
        
      </section>
  )
}



