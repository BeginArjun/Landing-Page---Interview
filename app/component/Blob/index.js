import style from './Blob.module.css'
const Blob=()=>{
    return(
        <div 
      className='absolute h-full w-full overflow-hidden'>
          <div 
        className={`w-full h-full relative top-0 left-0 ${style.blob1}`}>
            <div className='bg-[#FF00B8] rounded-full absolute w-[200px] h-[200px] blur-3xl'></div>
        </div>
          <div 
          className={`w-full h-full relative bottom-0   ${style.blob2}`}>
            <div className='bg-[#772BF2] rounded-full w-[200px] h-[200px] blur-3xl absolute -top-1/3 right-0'></div>
          </div>
      </div>
    )
}
export default Blob