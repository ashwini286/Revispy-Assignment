// src/CreateAccount.js
function CreateAccount() {
    return (
      <div className="flex items-center justify-center pt-4 bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center">Create your account</h2>
  
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter"
                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            <button
              type="submit"
              className="w-full py-2 mt-4 text-white bg-black rounded-md hover:bg-gray-800"
            >
              CREATE ACCOUNT
            </button>
          </form>
  
          <p className="text-center text-sm text-gray-600">
            Have an Account?{" "}
            <a href="#" className="font-medium text-black hover:underline">
              LOGIN
            </a>
          </p>
        </div>
      </div>
    );
  }
  
  export default CreateAccount;
  