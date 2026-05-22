import { Button } from "@heroui/react";
import Link from "next/link";

const MyRequest = ({ allRequest }) => {
    return (
        <div className="overflow-x-auto shadow-md rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <table className="w-full text-left border-collapse">
                <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
                    <tr>
                        <th className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700">Pet Name</th>
                        <th className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700">Status</th>
                        <th className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-300">
                    {allRequest.map((req) => (
                        <tr key={req._id} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <td className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700 font-medium">{req.petName}</td>
                            <td className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700 capitalize">
                                <span className={`px-2 py-1 rounded-full text-xs md:text-sm ${
                                    req.status === 'approved' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                                    req.status === 'rejected' ? 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400' : 
                                    'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                                }`}>
                                    {req.status}
                                </span>
                            </td>
                            <td className="p-3 md:p-4 border-b border-gray-200 dark:border-gray-700">
                                <Button size="sm" color="primary" variant="outline"><Link href={`/pet-detail/${req.petId}`}>View</Link></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default MyRequest;