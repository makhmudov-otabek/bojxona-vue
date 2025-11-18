<script setup lang="ts"></script>
<template>
  <div className="flex justify-between gap-10 p-4 bg-white">
    <div className="flex items-center gap-3 flex-1">
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-menu-icon lucide-menu"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
      <div className="flex-1">
        <form className="flex items-center gap-2">
          <label htmlFor="search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search-icon lucide-search"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          </label>

          <input
            id="search"
            type="search"
            name="search"
            className="w-full text-xl border-0 border-gray-300 focus:border-blue-600 focus:outline-none focus:ring-0 bg-transparent duration-200"
          />
        </form>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-bell-icon lucide-bell text-(--secondary)"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path
              d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
            />
          </svg>
        </button>
      </div>
      <div>
        <button className="w-10 h-10 p-2 rounded-full bg-(--secondary) text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-user-icon lucide-user"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
