import "./App.css";

function HelloWorld() {
  return (
    <main className='bg-yellow-500 w-dvw  min-h-dvh flex justify-center items-center'>
      <div className='border border-black rounded-[1.25rem] max-w-xs bg-white p-5 shadow-[10px_10px_black]'>
        <div className='overflow-clip flex flex-col gap-1'>
          <img
            src='https://images.unsplash.com/photo-1560445956-5cc3ebbb5e03?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Beau pic'
            className="rounded-2xl w-full aspect-[16/11] object-cover object-center"
          />
          <p className='px-3 bg-yellow-500 w-fit rounded-sm font-semibold text-sm mt-2'>Learning</p>
          <p className=' text-sm'>Published 21 Dec 2013</p>
          <h1 className="font-bold text-xl">HTML & CSS Foundations</h1>
          <p className="text-black/50 font-medium">
            These languages are the backbone of every website, defining content,
            structure and presentation{" "}
          </p>
        </div>

        <div className='flex gap-2 mt-4'>
          <img
            src='https://i.pinimg.com/1200x/39/42/1f/39421f0b137948a62358ce9b5d159bd9.jpg'
            alt='Jeni pics'
            className="size-8 rounded-full inline-block"
          />
          <p className='font-semibold'>Greg Hooper</p>
        </div>
      </div>
    </main>
  );
}

export default HelloWorld;
