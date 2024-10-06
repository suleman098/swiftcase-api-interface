function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="navbar bg-white text-black w-1/2 p-4 rounded-xl shadow-lg">
        <div className="flex-1">
          <img src="/SwiftCaseLogo.png" alt="SwiftCase Logo" className="h-10" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>External Links</summary>
                <ul className="bg-white text-black rounded-t-none p-2 shadow-md">
                  <li>
                    <a href="https://www.google.co.uk/">Google</a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/">Instagram</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">Facebook</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
