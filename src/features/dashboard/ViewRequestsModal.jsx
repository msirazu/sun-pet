'use client';

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { publicApi } from "@/lib/apiUrl";

const ViewRequestsModal = ({ pet, onClose }) => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pet?._id) return;

    const fetchRequests = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${publicApi}/user/dashboard/adoption-requests/${pet._id}`);
        const data = await response.json();
        
        if (data.success) {
          setRequests(data.data);
        }
      } catch (error) {
        toast.error("Failed to fetch requests!");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [pet]);

  const handleAction = async (requestId, statusType) => {
    try {

      const url = `${publicApi}/user/dashboard/adoption-requests/${statusType}/${requestId}`;
      
      const response = await fetch(url, {
        method: 'PATCH',
      });
      
      const data = await response.json();
      
      if (data.success) {
        toast.success(`Request ${statusType}ed successfully!`);
        
        const updatedRequests = requests.map((req) => {
          if (req._id === requestId) {
            return { ...req, status: statusType === 'approve' ? 'approved' : 'rejected' };
          }
          return req;
        });
        setRequests(updatedRequests);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  if (!pet) return null;

  return (

    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      
      <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl p-6 relative">
        
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 font-bold hover:text-black dark:hover:text-white cursor-pointer"
        >
          Close (X)
        </button>
        
        <h2 className="text-2xl font-bold mb-4 dark:text-white">
          Requests for {pet.petName}
        </h2>

        <div className="max-h-[70vh] overflow-y-auto">
          {loading ? (
            <p className="text-center py-5 dark:text-white">Loading...</p>
          ) : requests.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700 text-gray-600 dark:text-gray-300">
                  <th className="text-left py-2">Name</th>
                  <th className="text-left py-2">Email</th>
                  <th className="text-left py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((req) => (
                  <tr key={req._id} className="border-b dark:border-gray-700 dark:text-gray-200">
                    <td className="py-3">{req.userName}</td>
                    <td className="py-3">{req.userEmail}</td>
                    <td className="py-3">
                      {req.status === 'pending' ? (
                        <div className="flex gap-2">
                          <button 
                            onClick={() => handleAction(req._id, 'approve')}
                            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                          >
                            Accept
                          </button>
                          <button 
                            onClick={() => handleAction(req._id, 'reject')}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="font-bold capitalize">{req.status}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500 py-5">No requests yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewRequestsModal;