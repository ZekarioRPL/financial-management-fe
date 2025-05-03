"use client";

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import { Dialog } from '@/components/ui/Dialog';

type Collaborator = {
  name: string;
  username: string;
  status: "pending" | "collaborator";
};

export default function SettingPage() {
  const { id } = useParams();
  const [addCollaboration, setAddCollaboration] = useState(false);
  const collaborationId = Array.isArray(id) ? id[0] : id;

  const [formLogin, setFormLogin] = useState({});
  const [collaborators] = useState<Collaborator[]>([
    { name: "user 1", username: "user", status: "pending" },
    { name: "user 2", username: "user", status: "collaborator" },
    { name: "user 3", username: "user", status: "pending" },
  ]);

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Setting</h1>
      <NavigationTabs id={collaborationId} />

      <div className="py-5">
        <h2 className="text-2xl font-semibold mb-6">General</h2>

        {/* Rename */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Collaboration Name
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded text-sm w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-gray-700 text-white hover:bg-gray-600 text-sm px-4 py-2 rounded">
              Rename
            </button>
          </div>
        </div>

        <hr className="my-6 border-t border-gray-300" />

        {/* Manage Access */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Manage access</h2>
            <button onClick={() => setAddCollaboration(true)} className="bg-gray-700 text-white hover:bg-gray-600 text-sm px-4 py-2 rounded">
              Add people
            </button>
          </div>

          <div className="border border-gray-300 rounded mb-4">
            <div className="p-3 border-b border-gray-200 flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span>Select all</span>
              </label>
            </div>

            <div className="border-b border-gray-200">
              <input
                placeholder="Find a collaborator..."
                className="w-full bg-white text-sm p-3 placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="divide-y divide-gray-200">
              {collaborators.map((collab, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between px-3 py-4 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" />
                    <div>
                      <div className="font-medium text-gray-800">{collab.name}</div>
                      <div className="text-xs text-gray-500">
                        {collab.status === "collaborator"
                          ? `${collab.username} • Collaborator`
                          : `Awaiting ${collab.username}'s response`}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    {collab.status === "pending" && (
                      <span className="text-xs border border-gray-400 px-2 py-0.5 rounded">
                        Pending Invite
                      </span>
                    )}
                    <button className="text-red-500 hover:text-red-400">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Dialog isOpen={addCollaboration} onClose={() => setAddCollaboration(false)}>
        <h2 className="text-lg font-semibold mb-4">Add People</h2>
        <p className="text-sm text-gray-600 mb-4">Search by username, full name, or email</p>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-white border border-gray-300 text-gray-900 px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="space-x-2 mt-2 text-right">
          <button
            onClick={() => setAddCollaboration(false)}
            className="bg-gray-700 text-white hover:bg-gray-600 text-sm px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => setAddCollaboration(false)}
            className="bg-green-500 text-white hover:bg-green-700 text-sm px-4 py-2 rounded"
          >
            Add To Collaboration
          </button>
        </div>
      </Dialog>
    </>
  );
}
