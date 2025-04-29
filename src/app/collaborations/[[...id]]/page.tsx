"use client";

import { useParams } from 'next/navigation';

export default function Collaborations() {
  const params = useParams();
  const { id } = params

  return (
    <div>
      <h1>Manage Poin</h1>
      <p>ID: {Array.isArray(id) ? id.join(' / ') : id} {id}</p>
    </div>
  );
}
