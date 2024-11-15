function BoardHeader() {
    return (
      <>
        <div className="bg-reddit_dark-brighter py-4">
          <div className="mx-6 relative flex">
            <div className="h-20 w-20 rounded-full overflow-hidden relative ">
              <img src="https://styles.redditmedia.com/t5_2qs0q/styles/communityIcon_kxcmzy9bt1381.jpg?width=256&format=pjpg&s=0a2e472f6fae0712fee4a3b5d44920fe35dbcdaa" alt=""/>
            </div>
            <div className="pt-2 pl-4">
              <h1 className="text-gray-300 text-3xl">BRACU: Why are you here?</h1>
              <h5 className="text-gray-500">b/test</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export  default BoardHeader;