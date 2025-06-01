"use client";

import { NavigationTabs } from '@/app/components/layout/NavigationTabs';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export default function FinancialStatements() {

    const router = useRouter();

    // State untuk form fields
    const [formData, setFormData] = useState({
        category_id: "",
        status_id: "",
        name: "",
        amount: "",
        duedate: "",
        description: "",
    });

    // State untuk error validation dari API
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

    // State untuk loading submit
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle perubahan input form
    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Submit handler
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        try {
            const response = await fetch("http://127.0.0.1:8000/api/bills", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Redirect ke list bills
                router.push("/collaborations/1/bills"); // Ganti dengan route list bills di front-end-mu
            } else if (response.status === 422) {
                // Validation error
                const data = await response.json();
                setErrors(data.errors || {});
            } else {
                // Error lain
                alert("Terjadi kesalahan saat submit data");
            }
        } catch (error) {
            alert("Gagal koneksi ke server");
        } finally {
            setIsSubmitting(false);
        }
    }

    const params = useParams();
    const { id } = params


    const collaborations = [
        {
            title: 'Keuangan Keluarga',
            desc: 'Manajemen Keuangan Keluarga Agus',
            status: 'Active',
            href: '1',
            anggota: 3,
        },
        {
            title: 'Perusahaan A',
            desc: 'Manajemen Keuangan Perusahaan A',
            status: 'Non - Active',
            href: '2',
            anggota: 5,
        },
    ];

    const collaborationId = Array.isArray(id) ? id[0] : id;

    const currentData = collaborations.find((item) => item.href === collaborationId);

    if (!currentData) {
        return <div className="text-red-600">Data tidak ditemukan untuk ID: {collaborationId}</div>;
    }

    return (<>
        <h1 className="text-2xl font-bold text-gray-800">{currentData.title}</h1>
        <NavigationTabs id={`${id}`} />

        <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2"
                />
                {errors.name && <p className="text-red-600 text-sm">{errors.name.join(", ")}</p>}
            </div>

            {/* Amount */}
            <div>
                <label htmlFor="amount" className="block font-medium text-gray-700">Amount</label>
                <input
                    id="amount"
                    name="amount"
                    type="number"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2"
                />
                {errors.amount && <p className="text-red-600 text-sm">{errors.amount.join(", ")}</p>}
            </div>

            {/* Category */}
            <div>
                <label htmlFor="category_id" className="block font-medium text-gray-700">Category</label>
                <select
                    id="category_id"
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2"
                >
                    <option value="">-- Select Category --</option>
                    <option value="6">Makanan dan Minuman</option>
                    <option value="7">Transportasi</option>
                    <option value="8">Tagihan</option>
                    <option value="9">Hiburan</option>
                    <option value="10">Kesehatan</option>
                </select>
                {errors.category_id && <p className="text-red-600 text-sm">{errors.category_id.join(", ")}</p>}
            </div>

            {/* Status */}
            <div>
                <label htmlFor="status_id" className="block font-medium text-gray-700">Status</label>
                <select
                    id="status_id"
                    name="status_id"
                    value={formData.status_id}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2"
                >
                    <option value="">-- Select Status --</option>
                    <option value="1">Pending</option>
                    <option value="2">Paid</option>
                    <option value="3">Overdue</option>
                </select>
                {errors.status_id && <p className="text-red-600 text-sm">{errors.status_id.join(", ")}</p>}
            </div>

            {/* Due Date */}
            <div>
                <label htmlFor="duedate" className="block font-medium text-gray-700">Bill Date</label>
                <input
                    id="duedate"
                    name="duedate"
                    type="date"
                    value={formData.duedate}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2"
                />
                {errors.duedate && <p className="text-red-600 text-sm">{errors.duedate.join(", ")}</p>}
            </div>

            {/* Description */}
            <div>
                <label htmlFor="description" className="block font-medium text-gray-700">Description (Optional)</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full rounded border px-3 py-2"
                    rows={3}
                />
                {errors.description && <p className="text-red-600 text-sm">{errors.description.join(", ")}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-500 disabled:opacity-50"
            >
                {isSubmitting ? "Saving..." : "Save"}
            </button>
        </form>
    </>
    );
}
