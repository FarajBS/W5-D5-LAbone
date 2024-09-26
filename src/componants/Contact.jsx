export default function Contact() {
  return (
    <div>
        <div className="container mx-auto px-4 mt-5 mb-10">
            <div className="grid grid-cols-3 gap-4 ">

                <div className="col-span-2 h-48">
                    <div className="text-center bg-slate-100 pt-5 pb-0 flex">
                            <div>
                                <h1 className="font-light text-2xl my-3">WOODEN MINIMALISTIC CHAIRS</h1>
                                <h5 className="font-bold">Ganban</h5>
                                <h5 className="font-bold">40% Off <span className="text-[#b63737]">$99.99</span></h5>
                                <button className="bg-orange-400 p-3">Show Now</button>
                            </div>

                            <div className="flex justify-center	mt-3">
                                <img src="https://images.pexels.com/photos/7667442/pexels-photo-7667442.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-2/4" />
                            </div>
                    </div>
                </div>

                <div className="text-center bg-slate-100 pt-5 pb-0">
                    <h5 className="font-bold">Ganban</h5>
                    <h1 className="font-light text-2xl my-3">PACK 5 T-SHIRTS FOR SUMMER</h1>
                    <h5 className="font-bold">Strating at <span className="text-[#b63737]">$99.99</span></h5>
                    <div className="flex justify-center	mt-3">
                        <img src="https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-2/4" />
                    </div>
                </div>



               

            </div>
        </div>
    </div>
  )
}
