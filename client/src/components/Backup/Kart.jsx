import { useState } from 'react';
import { Search, Edit, Download, Filter, Menu, ChevronDown, ChevronUp } from 'lucide-react';

export default function ProductApprovalTable() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Paracitamol",
      barcode: "QR",
      description: "Medicine",
      status: "Pending for approval",
      verification: "Verified",
      activationDate: "2025-02-12",
      deactivationDate: "2200-02-12"
    },
    {
      id: 2,
      name: "Paracitamol",
      barcode: "QR",
      description: "Medicine",
      status: "Pending for approval",
      verification: "Verified",
      activationDate: "2025-02-12",
      deactivationDate: "2200-02-12"
    },
    {
      id: 3,
      name: "Paracitamol",
      barcode: "QR",
      description: "Medicine",
      status: "Pending for approval",
      verification: "Verified",
      activationDate: "2025-02-12",
      deactivationDate: "2200-02-12"
    },
    {
      id: 4,
      name: "Paracitamol",
      barcode: "QR",
      description: "Medicine",
      status: "Pending for approval",
      verification: "Verified",
      activationDate: "2025-02-12",
      deactivationDate: "2200-02-12"
    },
    {
      id: 5,
      name: "Paracitamol",
      barcode: "QR",
      description: "Medicine",
      status: "Pending for approval",
      verification: "Verified",
      activationDate: "2025-02-12",
      deactivationDate: "2200-02-12"
    }
  ]);
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);
  const [activeView, setActiveView] = useState('default'); // 'default', 'compact', 'detailed'

  const toggleCardExpansion = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const toggleView = (view) => {
    setActiveView(view);
  };

  return (
    <div className="w-full bg-white">
      {/* Small screen header */}
      <div className="lg:hidden p-4 flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 border border-gray-300 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={20} />
            <span className="text-gray-700">Menu</span>
          </button>
          
          <div className="relative flex-grow">
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full px-10 py-2 border border-gray-300 rounded"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="bg-white border border-gray-200 rounded shadow-lg p-4 flex flex-col gap-2">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded">
              <Download size={16} />
              <span>Export</span>
            </button>
            <div className="border-t border-gray-200 my-2 pt-2">
              <p className="text-sm text-gray-500 mb-2">View Options:</p>
              <div className="flex flex-col gap-2">
                <button 
                  className={`px-4 py-2 rounded text-left ${activeView === 'default' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                  onClick={() => toggleView('default')}
                >
                  Default View
                </button>
                <button 
                  className={`px-4 py-2 rounded text-left ${activeView === 'compact' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                  onClick={() => toggleView('compact')}
                >
                  Compact View
                </button>
                <button 
                  className={`px-4 py-2 rounded text-left ${activeView === 'detailed' ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                  onClick={() => toggleView('detailed')}
                >
                  Detailed View
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Desktop header */}
      <div className="hidden lg:flex justify-between items-center p-4 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded">
            <Filter size={20} />
            <span className="text-gray-700">Filter</span>
          </button>
          
          <div className="flex gap-2">
            <button 
              className={`px-3 py-1 rounded ${activeView === 'default' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => toggleView('default')}
            >
              Default
            </button>
            <button 
              className={`px-3 py-1 rounded ${activeView === 'compact' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => toggleView('compact')}
            >
              Compact
            </button>
            <button 
              className={`px-3 py-1 rounded ${activeView === 'detailed' ? 'bg-blue-100 text-blue-800' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => toggleView('detailed')}
            >
              Detailed
            </button>
          </div>
        </div>
        
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search" 
            className="px-10 py-2 border border-gray-300 rounded w-64"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>
      
      {/* Desktop and large tablet table view */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Sr. no.</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Product Name</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Barcode</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Edit</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Description</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Status</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Verification</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Activation Date</th>
                  <th scope="col" className="py-3 px-4 text-left text-xs font-medium uppercase">Deactivation Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr 
                    key={product.id} 
                    className={`${activeView === 'compact' ? 'h-12' : ''} hover:bg-gray-50`}
                  >
                    <td className="py-3 px-4 text-sm">{product.id}</td>
                    <td className="py-3 px-4 text-sm font-medium">{product.name}</td>
                    <td className="py-3 px-4">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="border border-gray-400 w-6 h-6"></div>
                        <div className="border border-gray-400 w-6 h-6"></div>
                        <div className="border border-gray-400 w-6 h-6"></div>
                        <div className="border border-gray-400 w-6 h-6 flex items-center justify-center">S</div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <button className="text-gray-600 hover:text-gray-900">
                          <Download size={18} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit size={18} />
                        </button>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm">{product.description}</td>
                    <td className="py-3 px-4 text-sm">{product.status}</td>
                    <td className="py-3 px-4 text-sm">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 bg-green-100 text-green-800 rounded-full">
                        {product.verification}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm">{product.activationDate}</td>
                    <td className="py-3 px-4 text-sm">{product.deactivationDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Medium screen simplified table */}
      <div className="hidden md:block lg:hidden overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th scope="col" className="py-3 px-3 text-left text-xs font-medium uppercase">Product</th>
                  <th scope="col" className="py-3 px-3 text-left text-xs font-medium uppercase">Status</th>
                  <th scope="col" className="py-3 px-3 text-left text-xs font-medium uppercase">Verification</th>
                  <th scope="col" className="py-3 px-3 text-left text-xs font-medium uppercase">Dates</th>
                  <th scope="col" className="py-3 px-3 text-left text-xs font-medium uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="py-3 px-3">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          <div className="text-sm text-gray-500">ID: {product.id}</div>
                          <div className="text-sm text-gray-500">{product.description}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-sm text-gray-500">{product.status}</td>
                    <td className="py-3 px-3">
                      <span className="inline-flex px-2 text-xs font-semibold leading-5 bg-green-100 text-green-800 rounded-full">
                        {product.verification}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <div className="text-sm text-gray-900">Act: {product.activationDate}</div>
                      <div className="text-sm text-gray-500">Deact: {product.deactivationDate}</div>
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex gap-2">
                        <button className="text-gray-600 hover:text-gray-900">
                          <Download size={18} />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Mobile card view */}
      <div className="md:hidden">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={`border-b border-gray-200 p-4 ${activeView === 'compact' ? 'py-2' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <div className="font-medium text-gray-900">{product.name}</div>
                <div className="text-sm text-gray-500">#{product.id} - {product.description}</div>
              </div>
              <button 
                onClick={() => toggleCardExpansion(product.id)}
                className="text-gray-500"
              >
                {expandedCard === product.id ? 
                  <ChevronUp size={20} /> : 
                  <ChevronDown size={20} />
                }
              </button>
            </div>
            
            <div className="mt-2 flex justify-between items-center">
              <div>
                <span className="inline-flex px-2 text-xs font-semibold leading-5 bg-green-100 text-green-800 rounded-full">
                  {product.verification}
                </span>
                <span className="ml-2 text-xs text-gray-500">{product.status}</span>
              </div>
              <div className="flex gap-2">
                <button className="text-gray-600 p-1 hover:bg-gray-100 rounded">
                  <Download size={18} />
                </button>
                <button className="text-gray-600 p-1 hover:bg-gray-100 rounded">
                  <Edit size={18} />
                </button>
              </div>
            </div>
            
            {(expandedCard === product.id || activeView === 'detailed') && (
              <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <div className="text-gray-500">Barcode:</div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="border border-gray-400 w-6 h-6"></div>
                    <div className="border border-gray-400 w-6 h-6"></div>
                    <div className="border border-gray-400 w-6 h-6"></div>
                    <div className="border border-gray-400 w-6 h-6 flex items-center justify-center">S</div>
                  </div>
                  
                  <div className="text-gray-500">Activation:</div>
                  <div>{product.activationDate}</div>
                  
                  <div className="text-gray-500">Deactivation:</div>
                  <div>{product.deactivationDate}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Pagination controls - visible on all devices */}
      <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div className="flex-1 flex justify-between sm:hidden">
          <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </button>
          <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of <span className="font-medium">5</span> results
            </p>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Previous
              </button>
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                1
              </button>
              <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}