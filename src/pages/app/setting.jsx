// // src/pages/ProfileRightPanelDummy.jsx
// import React from "react";
// import { useUser } from "../../hooks/useUser";

// export default function ProfileRightPanelDummy() {
//   // Data dummy
//   const {user} = useUser()

//     return (
//     <section className="w-full text-white">
//         {/* Header */}
//         <div className="mb-4 flex items-end justify-end">
//             <button type="button" className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10"aria-label="Close" >
//             <span className="text-lg leading-none">×</span>
//             </button>
//         </div>

//         {/* Card */}
//         <div className="overflow-hidden rounded-xl bg-[#10263F]">
//             {/* Cover */}
//             <div className="h-36 w-full bg-gradient-to-r from-sky-600 via-sky-400 to-blue-300" />

//                 {/* Avatar placeholder */}
//                 <div className="-mt-8 px-6">
//                     <div className="inline-grid h-16 w-16 place-items-center rounded-full bg-white ring-4 ring-[#10263F] shadow-lg">
//                         <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#0F223A]">
//                             <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"/>
//                         </svg>
//                         <span className="sr-only">Avatar</span>
//                     </div>
//                 </div>

//                 {/* Fields (dummy, read-only) */}
//                 <div className="px-6 pb-6 pt-4">
//                     <Field label="Username" value={user.username} />
//                     <Field label="Name" value={user.name} />
//                     <Field label="Email" value={user.email} />
//                     <div className="mt-4 flex justify-end">
//                         <button type="button" className="rounded-xl bg-[#3B82F6] px-4 py-2 text-sm font-medium shadow hover:brightness-110 focus:outline-none" >
//                             Edit profile
//                         </button>
//                     </div>
//                 </div>
//             </div>
//     </section>
//     );
// }

// function Field({ label, value }) {
//   return (
//     <label className="mb-3 block">
//       <span className="text-xs text-white/70">{label}</span>
//       <input
//         value={value}
//         readOnly
//         className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/40 focus:ring-2 focus:ring-white/20"
//       />
//     </label>
//   );
// }

import React from "react";
import { useUser } from "../../hooks/useUser";

export default function ProfileRightPanelDummy() {
  const { user, loading } = useUser();

  if (loading) return <p>Loading user...</p>; // tampil loading sementara fetch user
  if (!user) return <p className="flex justify-center items-center h-screen text-white text-xl">User not logged in</p>; // token invalid

  return (
    <section className="w-full text-white">
      <div className="mb-4 flex items-end justify-end">
        <button
          type="button"
          className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10"
        >
          <span className="text-lg leading-none">×</span>
        </button>
      </div>

      <div className="overflow-hidden rounded-xl bg-[#10263F]">
        <div className="h-36 w-full bg-gradient-to-r from-sky-600 via-sky-400 to-blue-300" />
        {/* Avatar */}
        <div className="-mt-8 px-6">
          <div className="inline-grid h-16 w-16 place-items-center rounded-full bg-white ring-4 ring-[#10263F] shadow-lg">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#0F223A]">
              <path
                fill="currentColor"
                d="M12 12a5 5 0 1 0-5-5a5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z"
              />
            </svg>
            <span className="sr-only">Avatar</span>
          </div>
        </div>

        {/* Fields */}
        <div className="px-6 pb-6 pt-4">
          <Field label="Username" value={user.username} />
          <Field label="Name" value={user.name} />
          <Field label="Email" value={user.email} />
          <div className="mt-4 flex justify-end">
            <button
              type="button"
              className="rounded-xl bg-[#3B82F6] px-4 py-2 text-sm font-medium shadow hover:brightness-110 focus:outline-none"
            >
              Edit profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value }) {
  return (
    <label className="mb-3 block">
      <span className="text-xs text-white/70">{label}</span>
      <input
        value={value}
        readOnly
        className="mt-1 w-full rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm outline-none placeholder-white/40 focus:ring-2 focus:ring-white/20"
      />
    </label>
  );
}
