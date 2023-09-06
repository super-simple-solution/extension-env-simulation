<script setup>
import './index.scss'
</script>

<template>
  <div class="inline-block min-w-full">
    <div class="border-divider-border-2 dark:border-dark-divider-border-2 border-b">
      <div role="row" style="display: flex; flex: 1 0 auto; min-width: 0px">
        <div
          colspan="1"
          role="columnheader"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="text-label-3 dark:text-dark-label-3 mx-2 py-[11px] font-normal"
        >
          <div class="flex items-center justify-between"><div class="overflow-hidden text-ellipsis">状态</div></div>
        </div>
        <div
          colspan="1"
          role="columnheader"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px; cursor: pointer"
          class="text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group mx-2 py-[11px] font-normal"
        >
          <div class="flex items-center justify-between">
            <div class="overflow-hidden text-ellipsis">题目</div>
            <span
              class="text-gray-5 dark:text-dark-gray-5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7 ml-2 h-3.5 w-3.5"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path
                  d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"
                ></path></svg
            ></span>
          </div>
        </div>
        <div
          colspan="1"
          role="columnheader"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px; cursor: pointer"
          class="text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group mx-2 py-[11px] font-normal"
        >
          <div class="flex items-center justify-between">
            <div class="overflow-hidden text-ellipsis">题解</div>
            <span
              class="text-gray-5 dark:text-dark-gray-5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7 ml-2 h-3.5 w-3.5"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path
                  d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"
                ></path></svg
            ></span>
          </div>
        </div>
        <div
          colspan="1"
          role="columnheader"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px; cursor: pointer"
          class="text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group mx-2 py-[11px] font-normal"
        >
          <div class="flex items-center justify-between">
            <div class="overflow-hidden text-ellipsis">通过率</div>
            <span
              class="text-gray-5 dark:text-dark-gray-5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7 ml-2 h-3.5 w-3.5"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path
                  d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"
                ></path></svg
            ></span>
          </div>
        </div>
        <div
          colspan="1"
          role="columnheader"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px; cursor: pointer"
          class="text-label-3 dark:text-dark-label-3 hover:text-gray-7 dark:hover:text-dark-gray-7 group mx-2 py-[11px] font-normal"
        >
          <div class="flex items-center justify-between">
            <div class="overflow-hidden text-ellipsis">难度</div>
            <span
              class="text-gray-5 dark:text-dark-gray-5 group-hover:text-gray-7 dark:group-hover:text-dark-gray-7 ml-2 h-3.5 w-3.5"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path
                  d="M18.695 9.378L12.83 3.769a1.137 1.137 0 00-.06-.054c-.489-.404-1.249-.377-1.7.06L5.303 9.381a.51.51 0 00-.16.366c0 .297.27.539.602.539h12.512a.64.64 0 00.411-.146.501.501 0 00.028-.762zM12.77 20.285c.021-.017.042-.035.062-.054l5.863-5.609a.5.5 0 00-.028-.762.64.64 0 00-.41-.146H5.743c-.332 0-.601.242-.601.54a.51.51 0 00.16.365l5.769 5.606c.45.437 1.21.464 1.698.06z"
                ></path></svg
            ></span>
          </div>
        </div>
        <div
          colspan="1"
          role="columnheader"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="text-label-3 dark:text-dark-label-3 mx-2 py-[11px] font-normal"
        >
          <div class="flex items-center justify-between"><div class="overflow-hidden text-ellipsis">出现频率</div></div>
        </div>
      </div>
    </div>
    <div role="rowgroup">
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="popover-wrapper inline-block" data-headlessui-state="">
            <div>
              <div id="headlessui-popover-button-:re4:" aria-expanded="false" data-headlessui-state="">
                <div>
                  <a
                    href="/problems/lowest-common-ancestor-of-deepest-leaves?envType=daily-question&amp;envId=Invalid Date"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      class="text-blue-s dark:text-dark-blue-s h-[18px] w-[18px] cursor-pointer"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M19 11.063V7h-2v1a1 1 0 11-2 0V7H9v1a1 1 0 01-2 0V7H5v4.063h14zm0 2H5V19h14v-5.938zM9 5h6V4a1 1 0 112 0v1h2a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2V4a1 1 0 012 0v1z"
                        clip-rule="evenodd"
                      ></path></svg
                  ></a>
                </div>
              </div>
              <div
                style="position: fixed; z-index: 40; inset: 0px auto auto 0px; transform: translate(51px, 223px)"
              ></div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/lowest-common-ancestor-of-deepest-leaves?envType=daily-question&amp;envId=Invalid Date"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >1123. 最深叶节点的最近公共祖先</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a
              href="/problems/lowest-common-ancestor-of-deepest-leaves/solution"
              class="truncate"
              aria-label="solution"
              >275</a
            ></span
          >
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>76.0%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/two-sum" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5">1. 两数之和</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/two-sum/solution" class="truncate" aria-label="solution">22534</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>53.0%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/add-two-numbers" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >2. 两数相加</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/add-two-numbers/solution" class="truncate" aria-label="solution">12537</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>42.7%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/longest-substring-without-repeating-characters"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >3. 无重复字符的最长子串</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a
              href="/problems/longest-substring-without-repeating-characters/solution"
              class="truncate"
              aria-label="solution"
              >14207</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>39.2%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/median-of-two-sorted-arrays"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >4. 寻找两个正序数组的中位数</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/median-of-two-sorted-arrays/solution" class="truncate" aria-label="solution">7142</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>41.6%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/longest-palindromic-substring"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >5. 最长回文子串</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/longest-palindromic-substring/solution" class="truncate" aria-label="solution">7898</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>37.8%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/zigzag-conversion" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >6. N 字形变换</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/zigzag-conversion/solution" class="truncate" aria-label="solution">4761</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>52.2%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/reverse-integer" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >7. 整数反转</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/reverse-integer/solution" class="truncate" aria-label="solution">7338</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>35.4%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/string-to-integer-atoi" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >8. 字符串转换整数 (atoi)</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/string-to-integer-atoi/solution" class="truncate" aria-label="solution">4392</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>21.2%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/palindrome-number" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >9. 回文数</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/palindrome-number/solution" class="truncate" aria-label="solution">8641</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>55.9%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/regular-expression-matching"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >10. 正则表达式匹配</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/regular-expression-matching/solution" class="truncate" aria-label="solution">2260</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>30.7%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/container-with-most-water"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >11. 盛最多水的容器</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/container-with-most-water/solution" class="truncate" aria-label="solution">5736</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>60.1%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/integer-to-roman" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >12. 整数转罗马数字</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/integer-to-roman/solution" class="truncate" aria-label="solution">3123</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>66.3%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/roman-to-integer" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >13. 罗马数字转整数</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/roman-to-integer/solution" class="truncate" aria-label="solution">6907</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>62.1%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/longest-common-prefix" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >14. 最长公共前缀</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/longest-common-prefix/solution" class="truncate" aria-label="solution">6941</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>43.5%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/3sum" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5">15. 三数之和</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/3sum/solution" class="truncate" aria-label="solution">6214</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>37.3%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/3sum-closest" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >16. 最接近的三数之和</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/3sum-closest/solution" class="truncate" aria-label="solution">2634</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>45.0%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/letter-combinations-of-a-phone-number"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >17. 电话号码的字母组合</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/letter-combinations-of-a-phone-number/solution" class="truncate" aria-label="solution"
              >5722</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>58.3%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/4sum" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5">18. 四数之和</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/4sum/solution" class="truncate" aria-label="solution">3049</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>36.8%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/remove-nth-node-from-end-of-list"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >19. 删除链表的倒数第 N 个结点</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/remove-nth-node-from-end-of-list/solution" class="truncate" aria-label="solution"
              >8181</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>46.1%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/valid-parentheses" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >20. 有效的括号</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/valid-parentheses/solution" class="truncate" aria-label="solution">9989</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>44.0%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/merge-two-sorted-lists" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >21. 合并两个有序链表</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/merge-two-sorted-lists/solution" class="truncate" aria-label="solution">7531</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>66.3%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/generate-parentheses" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >22. 括号生成</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/generate-parentheses/solution" class="truncate" aria-label="solution">4865</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>77.5%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/merge-k-sorted-lists" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >23. 合并 K 个升序链表</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/merge-k-sorted-lists/solution" class="truncate" aria-label="solution">4508</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>58.4%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/swap-nodes-in-pairs" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >24. 两两交换链表中的节点</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/swap-nodes-in-pairs/solution" class="truncate" aria-label="solution">4835</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>71.7%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/reverse-nodes-in-k-group" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >25. K 个一组翻转链表</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/reverse-nodes-in-k-group/solution" class="truncate" aria-label="solution">4044</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>67.7%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/remove-duplicates-from-sorted-array"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >26. 删除有序数组中的重复项</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/remove-duplicates-from-sorted-array/solution" class="truncate" aria-label="solution"
              >8848</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>55.0%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/remove-element" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >27. 移除元素</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/remove-element/solution" class="truncate" aria-label="solution">8352</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>59.1%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/find-the-index-of-the-first-occurrence-in-a-string"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >28. 找出字符串中第一个匹配项的下标</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a
              href="/problems/find-the-index-of-the-first-occurrence-in-a-string/solution"
              class="truncate"
              aria-label="solution"
              >6057</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>42.7%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/divide-two-integers" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >29. 两数相除</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/divide-two-integers/solution" class="truncate" aria-label="solution">1601</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>22.2%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/substring-with-concatenation-of-all-words"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >30. 串联所有单词的子串</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a
              href="/problems/substring-with-concatenation-of-all-words/solution"
              class="truncate"
              aria-label="solution"
              >1345</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>39.5%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/next-permutation" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >31. 下一个排列</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/next-permutation/solution" class="truncate" aria-label="solution">3298</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>38.5%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/longest-valid-parentheses"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >32. 最长有效括号</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/longest-valid-parentheses/solution" class="truncate" aria-label="solution">2366</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>37.3%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/search-in-rotated-sorted-array"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >33. 搜索旋转排序数组</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/search-in-rotated-sorted-array/solution" class="truncate" aria-label="solution">4744</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>43.9%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a
                    href="/problems/find-first-and-last-position-of-element-in-sorted-array"
                    class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >34. 在排序数组中查找元素的第一个和最后一个位置</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a
              href="/problems/find-first-and-last-position-of-element-in-sorted-array/solution"
              class="truncate"
              aria-label="solution"
              >7717</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>42.5%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/search-insert-position" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >35. 搜索插入位置</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/search-insert-position/solution" class="truncate" aria-label="solution">7804</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>45.2%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-olive dark:text-dark-olive">简单</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/valid-sudoku" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >36. 有效的数独</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/valid-sudoku/solution" class="truncate" aria-label="solution">2705</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>63.0%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/sudoku-solver" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >37. 解数独</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/sudoku-solver/solution" class="truncate" aria-label="solution">1626</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>67.6%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/count-and-say" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >38. 外观数列</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/count-and-say/solution" class="truncate" aria-label="solution">3315</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>60.5%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/combination-sum" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >39. 组合总和</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/combination-sum/solution" class="truncate" aria-label="solution">4025</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>72.4%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/combination-sum-ii" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >40. 组合总和 II</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/combination-sum-ii/solution" class="truncate" aria-label="solution">2810</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>59.6%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/first-missing-positive" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >41. 缺失的第一个正数</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/first-missing-positive/solution" class="truncate" aria-label="solution">2261</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>43.3%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/trapping-rain-water" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >42. 接雨水</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/trapping-rain-water/solution" class="truncate" aria-label="solution">4654</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>63.1%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/multiply-strings" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >43. 字符串相乘</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/multiply-strings/solution" class="truncate" aria-label="solution">2118</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>44.4%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/wildcard-matching" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >44. 通配符匹配</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/wildcard-matching/solution" class="truncate" aria-label="solution">925</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>33.8%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-pink dark:text-dark-pink">困难</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/jump-game-ii" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >45. 跳跃游戏 II</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/jump-game-ii/solution" class="truncate" aria-label="solution">3536</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>45.0%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/permutations" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >46. 全排列</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/permutations/solution" class="truncate" aria-label="solution">5949</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>78.9%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/permutations-ii" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >47. 全排列 II</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/permutations-ii/solution" class="truncate" aria-label="solution">2952</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>65.6%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/rotate-image" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >48. 旋转图像</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/rotate-image/solution" class="truncate" aria-label="solution">4610</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>74.9%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
      >
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        ></div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/group-anagrams" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5"
                    >49. 字母异位词分组</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/group-anagrams/solution" class="truncate" aria-label="solution">2722</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span>67.8%</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
          class="mx-2 flex items-center py-[11px]"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
          class="mx-2 flex items-center py-[11px]"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
      <div
        role="row"
        class="odd:bg-layer-1 even:bg-overlay-1 dark:odd:bg-dark-layer-bg dark:even:bg-dark-fill-4"
        style="display: flex; flex: 1 0 auto; min-width: 0px"
      >
        <div
          role="cell"
          class="mx-2 flex items-center py-[11px]"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
        ></div>
        <div
          role="cell"
          class="mx-2 flex items-center py-[11px]"
          style="box-sizing: border-box; flex: 160 0 auto; min-width: 0px; width: 160px"
        >
          <div class="flex max-w-[302px] items-center overflow-hidden">
            <div class="overflow-hidden">
              <div class="flex items-center">
                <div class="truncate">
                  <a href="/problems/powx-n" class="hover:text-blue-s dark:hover:text-dark-blue-s h-5">50. Pow(x, n)</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          role="cell"
          class="mx-2 flex items-center py-[11px]"
          style="box-sizing: border-box; flex: 96 0 auto; min-width: 0px; width: 96px"
        >
          <span class="text-label-1 dark:text-dark-label-1 flex items-center space-x-2"
            ><a href="/problems/powx-n/solution" class="truncate" aria-label="solution">2172</a
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              class="text-gray-5 dark:text-dark-gray-5 h-4 w-4 shrink-0"
            >
              <path
                fill-rule="evenodd"
                d="M14 5H5a3 3 0 00-3 3v8a3 3 0 003 3h9a3 3 0 003-3v-1.255l3.331 2.998c.644.58 1.669.123 1.669-.743V8c0-.866-1.025-1.322-1.669-.743L17 10.255V8a3 3 0 00-3-3zM5 7h9a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V8a1 1 0 011-1zm12.494 5.5L20 10.244v4.511L17.494 12.5z"
                clip-rule="evenodd"
              ></path></svg
          ></span>
        </div>
        <div
          role="cell"
          class="mx-2 flex items-center py-[11px]"
          style="box-sizing: border-box; flex: 82 0 auto; min-width: 0px; width: 82px"
        >
          <span>38.0%</span>
        </div>
        <div
          role="cell"
          class="mx-2 flex items-center py-[11px]"
          style="box-sizing: border-box; flex: 60 0 auto; min-width: 0px; width: 60px"
        >
          <span class="text-yellow dark:text-dark-yellow">中等</span>
        </div>
        <div
          role="cell"
          class="mx-2 flex items-center py-[11px]"
          style="box-sizing: border-box; flex: 88 0 auto; min-width: 0px; width: 88px"
        >
          <div class="flex h-full w-full flex-row items-center">
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-l-lg"></span>
            <div class="cursor-pointer">
              <div data-options="[object Object]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  class="flex-0 text-gray-5 dark:text-gray-7 -mt-1.5 h-5 w-5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7 8v2H6a3 3 0 00-3 3v6a3 3 0 003 3h12a3 3 0 003-3v-6a3 3 0 00-3-3h-1V8A5 5 0 007 8zm8 0v2H9V8a3 3 0 116 0zm-3 6a2 2 0 100 4 2 2 0 000-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <span class="bg-fill-3 dark:bg-dark-fill-3 h-2 flex-1 rounded-r-lg"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
