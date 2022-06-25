const NavBar = () => {
  return (
    <div className="navbar absolute inset-x-0 top-0 mx-auto p-4">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl underline">TS INDUSTRY WEBSITE</a>
      </div>
      <div className="">
        <button className="btn btn-ghost normal-case">
          <p>{ "{" }</p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg><p>{ "}" }</p>
        </button>
      </div>
    </div>
  )
}

export default NavBar