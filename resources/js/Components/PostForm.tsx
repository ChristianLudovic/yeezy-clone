import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function PostForm() {
    // Utiliser `useForm` d'Inertia pour gérer le formulaire
    const { data, setData, post, reset, errors } = useForm({
        title: '',
        content: '',
    });

    // Fonction pour gérer l'envoi du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();

        // Envoi des données via Inertia (POST vers la route 'posts.store')
        post(route('posts.store'), {
            onSuccess: () => reset(), // Réinitialiser le formulaire après succès
        });
    };

    return (
        <form onSubmit={handleSubmit} className="border border-gray-300 p-4 space-y-3">
            <div className="space-y-3 w-full">
                <input
                    autoComplete="off"
                    name="title"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    type="text"
                    placeholder="Titre de votre post"
                    className="px-2 py-3 border border-gray-300 block w-full text-sm focus:outline-none"
                />
                {errors.title && <div className="text-red-500 text-sm">{errors.title}</div>}
                <textarea
                    name="content"
                    value={data.content}
                    onChange={(e) => setData('content', e.target.value)}
                    placeholder="Contenu du post"
                    className="px-2 pt-2 border border-gray-300 block w-full text-sm focus:outline-none"
                ></textarea>
                {errors.content && <div className="text-red-500 text-sm">{errors.content}</div>}
            </div>
            <button type="submit" className="flex items-center justify-center px-4 py-2 text-white bg-black text-sm">
                Enregistrer
            </button>
        </form>
    );
}
