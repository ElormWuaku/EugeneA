import { useState } from 'react';
import { 
  Truck, 
  PlusCircle, 
  Edit, 
  Trash2,
  Camera,
  Save,
  X
} from 'lucide-react';

const FarmerDashboard = () => {
  const [produce, setProduce] = useState([
    { 
      id: 1, 
      name: 'Organic Plantains', 
      quantity: 50, 
      unit: 'kg', 
      price: 25.00 
    },
    { 
      id: 2, 
      name: 'Free-Range Eggs', 
      quantity: 100, 
      unit: 'crate', 
      price: 45.00 
    }
  ]);

  const [farmProfile, setFarmProfile] = useState({
    name: 'Akwaaba Farms',
    location: 'Kumasi, Ashanti Region',
    farmSize: '15 acres',
    primaryCrops: 'Plantains, Eggs, Cassava',
    profileImage: null
  });

  const [isAddProduceModal, setIsAddProduceModal] = useState(false);
  const [newProduce, setNewProduce] = useState({
    name: '',
    quantity: '',
    unit: '',
    price: ''
  });

  // State for editing farm profile
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editedProfile, setEditedProfile] = useState({...farmProfile});

  // State for editing produce
  const [editingProduceId, setEditingProduceId] = useState(null);
  const [editedProduce, setEditedProduce] = useState({});

  const handleProfileImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFarmProfile(prev => ({
          ...prev,
          profileImage: reader.result
        }));
        setEditedProfile(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddProduce = (e) => {
    e.preventDefault();

    const quantityNum = Number(newProduce.quantity);
    const priceNum = Number(newProduce.price);

    if (!newProduce.name || isNaN(quantityNum) || !newProduce.unit || isNaN(priceNum)) {
      alert('Please fill in all fields correctly');
      return;
    }

    const newItem = {
      id: produce.length + 1,
      name: newProduce.name,
      quantity: quantityNum,
      unit: newProduce.unit,
      price: priceNum
    };

    setProduce(prevProduce => [...prevProduce, newItem]);
    setNewProduce({ name: '', quantity: '', unit: '', price: '' });
    setIsAddProduceModal(false);
  };

  // Save edited farm profile
  const handleSaveProfile = () => {
    setFarmProfile(editedProfile);
    setIsEditingProfile(false);
  };

  // Edit a produce item
  const handleEditProduce = (item) => {
    setEditingProduceId(item.id);
    setEditedProduce({...item});
  };

  // Save edited produce
  const handleSaveProduce = () => {
    setProduce(prevProduce => 
      prevProduce.map(item => 
        item.id === editingProduceId ? editedProduce : item
      )
    );
    setEditingProduceId(null);
  };

  // Delete a produce item
  const handleDeleteProduce = (id) => {
    setProduce(prevProduce => prevProduce.filter(item => item.id !== id));
  };

  return (
    <div className="bg-green-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-6">
        {/* Farm Profile Card */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-green-100 md:col-span-1">
          <div className="relative mx-auto w-32 h-32 mb-4">
            {farmProfile.profileImage ? (
              <img 
                src={farmProfile.profileImage} 
                alt="Farm Profile" 
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                <Truck className="w-16 h-16 text-[#244521]" />
              </div>
            )}
            {isEditingProfile && (
              <label 
                htmlFor="profile-upload" 
                className="absolute bottom-0 right-0 bg-green-500 text-white rounded-full p-2 cursor-pointer hover:bg-green-600"
              >
                <Camera className="w-5 h-5" />
                <input 
                  type="file" 
                  id="profile-upload" 
                  accept="image/*"
                  className="hidden"
                  onChange={handleProfileImageUpload}
                />
              </label>
            )}
          </div>

          <div className="flex justify-between items-center mb-4">
            {isEditingProfile ? (
              <div className="w-full space-y-3">
                <input 
                  type="text"
                  value={editedProfile.name}
                  onChange={(e) => setEditedProfile({...editedProfile, name: e.target.value})}
                  className="w-full border rounded p-2 mb-2"
                />
                <input 
                  type="text"
                  value={editedProfile.location}
                  onChange={(e) => setEditedProfile({...editedProfile, location: e.target.value})}
                  className="w-full border rounded p-2 mb-2"
                />
                <input 
                  type="text"
                  value={editedProfile.farmSize}
                  onChange={(e) => setEditedProfile({...editedProfile, farmSize: e.target.value})}
                  className="w-full border rounded p-2 mb-2"
                />
                <input 
                  type="text"
                  value={editedProfile.primaryCrops}
                  onChange={(e) => setEditedProfile({...editedProfile, primaryCrops: e.target.value})}
                  className="w-full border rounded p-2 mb-2"
                />
              </div>
            ) : (
              <h2 className="text-xl font-bold text-[#244521] flex-grow">{farmProfile.name}</h2>
            )}
            <div className="ml-2">
              {isEditingProfile ? (
                <div className="flex space-x-2">
                  <button 
                    onClick={handleSaveProfile}
                    className="text-green-500 hover:text-green-600"
                  >
                    <Save />
                  </button>
                  <button 
                    onClick={() => {
                      setIsEditingProfile(false);
                      setEditedProfile({...farmProfile});
                    }}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X />
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsEditingProfile(true)}
                  className="text-yellow-500 hover:text-yellow-600"
                >
                  <Edit />
                </button>
              )}
            </div>
          </div>

          {!isEditingProfile && (
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-700">{farmProfile.location}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Farm Size</p>
                <p className="text-gray-700">{farmProfile.farmSize}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Primary Crops</p>
                <p className="text-gray-700">{farmProfile.primaryCrops}</p>
              </div>
            </div>
          )}
        </div>

        
 {/* Produce Inventory */}
 <div className="bg-white shadow-lg rounded-xl p-6 border border-green-100 md:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-[#244521]">Produce Inventory</h2>
            <button 
              onClick={() => setIsAddProduceModal(true)}
              className="flex items-center bg-[#244521] text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              <PlusCircle className="mr-2" /> Add Produce
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-green-100">
                <tr>
                  <th className="p-3">Produce Name</th>
                  <th className="p-3">Quantity</th>
                  <th className="p-3">Price (GHS)</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {produce.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-green-50">
                    {editingProduceId === item.id ? (
                      <>
                        <td className="p-3">
                          <input 
                            type="text"
                            value={editedProduce.name}
                            onChange={(e) => setEditedProduce({...editedProduce, name: e.target.value})}
                            className="w-full border rounded p-1"
                          />
                        </td>
                        <td className="p-3 flex">
                          <input 
                            type="number"
                            value={editedProduce.quantity}
                            onChange={(e) => setEditedProduce({...editedProduce, quantity: Number(e.target.value)})}
                            className="w-20 border rounded p-1 mr-1"
                          />
                          <input 
                            type="text"
                            value={editedProduce.unit}
                            onChange={(e) => setEditedProduce({...editedProduce, unit: e.target.value})}
                            className="w-20 border rounded p-1"
                          />
                        </td>
                        <td className="p-3">
                          <input 
                            type="number"
                            value={editedProduce.price}
                            onChange={(e) => setEditedProduce({...editedProduce, price: Number(e.target.value)})}
                            className="w-full border rounded p-1"
                          />
                        </td>
                        <td className="p-3 flex space-x-2">
                          <button 
                            onClick={handleSaveProduce}
                            className="text-green-500 hover:text-green-600"
                          >
                            <Save />
                          </button>
                          <button 
                            onClick={() => setEditingProduceId(null)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <X />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.quantity} {item.unit}</td>
                        <td className="p-3">{item.price.toFixed(2)}</td>
                        <td className="p-3 flex space-x-2">
                          <button 
                            onClick={() => handleEditProduce(item)}
                            className="text-yellow-500 hover:text-yellow-600"
                          >
                            <Edit />
                          </button>
                          <button 
                            onClick={() => handleDeleteProduce(item.id)}
                            className="text-red-500 hover:text-red-600"
                          >
                            <Trash2 />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add Produce Modal */}
      {isAddProduceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-xl">
            <h2 className="text-xl font-bold mb-4 text-green-700">Add New Produce</h2>
            <form onSubmit={handleAddProduce} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Produce Name</label>
                <input 
                  type="text"
                  value={newProduce.name}
                  onChange={(e) => setNewProduce({...newProduce, name: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                <input 
                  type="number"
                  value={newProduce.quantity}
                  onChange={(e) => setNewProduce({...newProduce, quantity: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Unit</label>
                <input 
                  type="text"
                  value={newProduce.unit}
                  onChange={(e) => setNewProduce({...newProduce, unit: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Price (GHS)</label>
                <input 
                  type="number"
                  step="0.01"
                  value={newProduce.price}
                  onChange={(e) => setNewProduce({...newProduce, price: e.target.value})}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  required
                />
              </div>
              <div className="flex space-x-3">
                <button 
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
                >
                  Add Produce
                </button>
                <button 
                  type="button"
                  onClick={() => setIsAddProduceModal(false)}
                  className="w-full bg-gray-200 text-gray-700 py-2 rounded-md hover:bg-gray-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmerDashboard;