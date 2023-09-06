<script lang="ts" setup>
import './index.scss'
</script>

<template>
  <div>
    <div
      class="chat-list dialog-inner flex h-full min-h-[200px] w-[calc(100%-40px)] flex-col gap-5 overflow-y-auto overflow-x-hidden rounded-2xl pt-7 sm:w-[calc(90%-40px)] md:w-[calc(100%-40px)] md:pl-[calc(12.5%-40px)] md:pr-[12.5%]"
    >
      <div class="chat-row box-border flex w-full flex-row">
        <div
          class="mr-2 box-border flex h-8 w-[48px] flex-shrink-0 basis-8 items-center justify-center overflow-hidden rounded-full"
        >
          <span
            class="avatar-wrapper relative inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full border-[#ffffff] bg-[#F8D4C4] text-center text-center align-top text-[calc(1.2rem)] font-medium uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M12.994 13c2.452 0 4.717-1.834 4.978-4.53C18.233 5.654 16.055 3 12.994 3c-3.062 0-5.24 2.655-4.978 5.47.26 2.686 2.526 4.53 4.978 4.53Zm-.038 2.367c-5.5 0-9.956 2.19-9.956 4.878 0 .921.846 1.282 3.335 1.543 1.93.212 4.232.212 6.659.212 2.489 0 4.953 0 6.695-.212C22.141 21.49 23 21.166 23 20.245c0-2.7-4.555-4.878-10.044-4.878Z"
              ></path>
            </svg>
          </span>
        </div>
        <div
          class="relative box-border min-w-[calc(100%-40px)] max-w-[calc(100%-40px)] items-start overflow-hidden text-sm"
        >
          <div class="chat-row-text flex flex-1 flex-row items-end gap-1">
            <div class="text-wrap message-request mt-1 w-full text-black">
              <div class="break-words leading-relaxed">
                <div class="whitespace-pre-wrap break-words text-sm font-medium 2xl:text-base">
                  帮我随机写一个latex公式
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-row box-border flex w-full flex-row">
        <div
          class="mr-2 box-border flex h-8 w-[48px] flex-shrink-0 basis-8 items-center justify-center overflow-hidden rounded-full"
        >
          <span
            class="avatar-wrapper relative inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full border-[#ffffff] bg-[#FF6933] text-center text-center align-top text-[calc(1.2rem)] font-medium uppercase text-[#ffffff]"
            ><div role="img" class="text-[calc(1.2rem)] leading-[3rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" class="bot-avatar">
                <g clip-path="url(#bot-avatar_svg__a)">
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M13.403 0a6.234 6.234 0 0 0-6.234 6.234v.935h-.935A6.234 6.234 0 0 0 0 13.403v5.194a6.234 6.234 0 0 0 6.234 6.234h.935v.935A6.234 6.234 0 0 0 13.403 32h5.194a6.234 6.234 0 0 0 6.234-6.234v-.935h.935A6.234 6.234 0 0 0 32 18.597v-1.143a.623.623 0 0 0-.623-.623h-2.078a.623.623 0 0 0-.624.623v1.143a2.91 2.91 0 0 1-2.597 2.893v.017H12.779a.623.623 0 0 0-.623.623v2.078c0 .344.279.623.623.623h8.727v.935a2.909 2.909 0 0 1-2.909 2.91h-5.194a2.91 2.91 0 0 1-2.908-2.806h-.002V17.662h8.104a2.91 2.91 0 0 1 2.659 1.726c.116.26.358.456.642.456h2.191c.373 0 .665-.326.58-.69a6.225 6.225 0 0 0-1.709-3.035 5.802 5.802 0 0 0 1.871-4.275v-1.35h.935a2.91 2.91 0 0 1 2.91 2.909v1.143c0 .344.278.623.623.623h2.078c.344 0 .623-.28.623-.623v-1.143a6.234 6.234 0 0 0-6.234-6.234h-.935v-.935A6.234 6.234 0 0 0 18.597 0h-5.194Zm5.61 14.338h-8.52v-1.559a.623.623 0 0 0-.623-.623H7.792a.623.623 0 0 0-.623.623v8.728h-.935a2.91 2.91 0 0 1-2.91-2.91v-5.194a2.91 2.91 0 0 1 2.91-2.91H19.22c.344 0 .623-.279.623-.623V7.792a.623.623 0 0 0-.623-.623h-8.728v-.935a2.91 2.91 0 0 1 2.91-2.91h5.194A2.91 2.91 0 0 1 21.5 6.027h.008v5.818a2.494 2.494 0 0 1-2.494 2.494Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="bot-avatar_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath>
                </defs>
              </svg></div
          ></span>
        </div>
        <div
          class="relative box-border min-w-[calc(100%-40px)] max-w-[calc(100%-40px)] items-start overflow-hidden text-sm"
        >
          <div class="chat-row-text flex flex-1 flex-row items-end gap-1">
            <div
              class="text-wrap message-reply w-full rounded-b-3xl rounded-tl rounded-tr-3xl bg-[#ffffff] p-4 text-black"
            >
              <div class="break-words leading-relaxed">
                <div
                  class="markdown-body"
                  style="font-size: 14px; color: rgb(25, 19, 22); height: auto; width: auto; direction: ltr"
                >
                  <div class="relative text-sm 2xl:text-base">
                    <p>当然可以！这是一个简单的二次方程示例：</p>
                    <pre>
                      <span class="copy-code-button"></span>
                      <code>
                        \[
                        ax^2 + bx + c = 0
                        \]
                      </code>
                    </pre>
                    <p>
                      在这个公式中，a、b 和 c 是常数，x
                      是我们要解的变量。你可以根据需要替换这些常数。如果你需要进一步的帮助或有其他类型的公式，请告诉我！
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-2 flex flex-row items-center justify-end pr-3">
            <div class="copy-unlike flex h-[24px] flex-row items-center justify-end">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" class="cursor-pointer">
                <g fill="none" fill-rule="evenodd" stroke="#7B8295" stroke-linejoin="round" stroke-width="2">
                  <path
                    stroke-linecap="round"
                    d="M6.79 6.52V4.332C6.79 3.596 7.385 3 8.121 3h11.546C20.404 3 21 3.596 21 4.332v11.546c0 .736-.596 1.333-1.332 1.333h-2.213"
                  ></path>
                  <path
                    d="M15.878 6.79H4.332C3.596 6.79 3 7.385 3 8.121v11.546C3 20.404 3.596 21 4.332 21h11.546c.736 0 1.333-.596 1.333-1.332V8.122c0-.736-.597-1.333-1.333-1.333Z"
                  ></path>
                </g>
              </svg>
              <div class="default-like-icon fading-vr-black h-[16px]"></div>
              <div id="feedback-like-593406" class="like-wrapper like-unlike-wrap cursor-pointer rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="like-normal default-like-icon"
                >
                  <g fill="none" fill-rule="evenodd" stroke="#7B8295" stroke-linejoin="round" stroke-width="2">
                    <path
                      d="M13.788 9.3V5.7c0-1.491-1.208-2.7-2.697-2.7l-3.596 8.1V21h10.446a1.799 1.799 0 0 0 1.798-1.53l1.24-8.1a1.801 1.801 0 0 0-1.797-2.07h-5.394ZM7.495 11h-2.4C4.04 10.981 3.14 11.855 3 12.9v6.3A2.077 2.077 0 0 0 5.095 21h2.4V11Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div
                id="feedback-unlike-593406"
                class="unlike-wrapper like-unlike-wrap rotate-180 cursor-pointer rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  class="unlike-normal default-like-icon mt-1px flex"
                >
                  <g fill="none" fill-rule="evenodd" stroke="#7B8295" stroke-linejoin="round" stroke-width="2">
                    <path
                      d="M13.788 9.3V5.7c0-1.491-1.208-2.7-2.697-2.7l-3.596 8.1V21h10.446a1.799 1.799 0 0 0 1.798-1.53l1.24-8.1a1.801 1.801 0 0 0-1.797-2.07h-5.394ZM7.495 11h-2.4C4.04 10.981 3.14 11.855 3 12.9v6.3A2.077 2.077 0 0 0 5.095 21h2.4V11Z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-row box-border flex w-full flex-row">
        <div
          class="mr-2 box-border flex h-8 w-[48px] flex-shrink-0 basis-8 items-center justify-center overflow-hidden rounded-full"
        >
          <span
            class="avatar-wrapper relative inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full border-[#ffffff] bg-[#F8D4C4] text-center text-center align-top text-[calc(1.2rem)] font-medium uppercase"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                fill="#FFF"
                fill-rule="nonzero"
                d="M12.994 13c2.452 0 4.717-1.834 4.978-4.53C18.233 5.654 16.055 3 12.994 3c-3.062 0-5.24 2.655-4.978 5.47.26 2.686 2.526 4.53 4.978 4.53Zm-.038 2.367c-5.5 0-9.956 2.19-9.956 4.878 0 .921.846 1.282 3.335 1.543 1.93.212 4.232.212 6.659.212 2.489 0 4.953 0 6.695-.212C22.141 21.49 23 21.166 23 20.245c0-2.7-4.555-4.878-10.044-4.878Z"
              ></path>
            </svg>
          </span>
        </div>
        <div
          class="relative box-border min-w-[calc(100%-40px)] max-w-[calc(100%-40px)] items-start overflow-hidden text-sm"
        >
          <div class="chat-row-text flex flex-1 flex-row items-end gap-1">
            <div class="text-wrap message-request mt-1 w-full text-black">
              <div class="break-words leading-relaxed">
                <div class="whitespace-pre-wrap break-words text-sm font-medium 2xl:text-base">再来一个</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat-row box-border flex w-full flex-row">
        <div
          class="mr-2 box-border flex h-8 w-[48px] flex-shrink-0 basis-8 items-center justify-center overflow-hidden rounded-full"
        >
          <span
            class="avatar-wrapper relative inline-flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full border-[#ffffff] bg-[#FF6933] text-center text-center align-top text-[calc(1.2rem)] font-medium uppercase text-[#ffffff]"
            ><div role="img" class="text-[calc(1.2rem)] leading-[3rem]">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" class="bot-avatar">
                <g clip-path="url(#bot-avatar_svg__a)">
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M13.403 0a6.234 6.234 0 0 0-6.234 6.234v.935h-.935A6.234 6.234 0 0 0 0 13.403v5.194a6.234 6.234 0 0 0 6.234 6.234h.935v.935A6.234 6.234 0 0 0 13.403 32h5.194a6.234 6.234 0 0 0 6.234-6.234v-.935h.935A6.234 6.234 0 0 0 32 18.597v-1.143a.623.623 0 0 0-.623-.623h-2.078a.623.623 0 0 0-.624.623v1.143a2.91 2.91 0 0 1-2.597 2.893v.017H12.779a.623.623 0 0 0-.623.623v2.078c0 .344.279.623.623.623h8.727v.935a2.909 2.909 0 0 1-2.909 2.91h-5.194a2.91 2.91 0 0 1-2.908-2.806h-.002V17.662h8.104a2.91 2.91 0 0 1 2.659 1.726c.116.26.358.456.642.456h2.191c.373 0 .665-.326.58-.69a6.225 6.225 0 0 0-1.709-3.035 5.802 5.802 0 0 0 1.871-4.275v-1.35h.935a2.91 2.91 0 0 1 2.91 2.909v1.143c0 .344.278.623.623.623h2.078c.344 0 .623-.28.623-.623v-1.143a6.234 6.234 0 0 0-6.234-6.234h-.935v-.935A6.234 6.234 0 0 0 18.597 0h-5.194Zm5.61 14.338h-8.52v-1.559a.623.623 0 0 0-.623-.623H7.792a.623.623 0 0 0-.623.623v8.728h-.935a2.91 2.91 0 0 1-2.91-2.91v-5.194a2.91 2.91 0 0 1 2.91-2.91H19.22c.344 0 .623-.279.623-.623V7.792a.623.623 0 0 0-.623-.623h-8.728v-.935a2.91 2.91 0 0 1 2.91-2.91h5.194A2.91 2.91 0 0 1 21.5 6.027h.008v5.818a2.494 2.494 0 0 1-2.494 2.494Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <defs>
                  <clipPath id="bot-avatar_svg__a"><path fill="#fff" d="M0 0h32v32H0z"></path></clipPath>
                </defs>
              </svg></div
          ></span>
        </div>
        <div
          class="relative box-border min-w-[calc(100%-40px)] max-w-[calc(100%-40px)] items-start overflow-hidden text-sm"
        >
          <div class="chat-row-text flex flex-1 flex-row items-end gap-1">
            <div
              class="text-wrap message-reply w-full rounded-b-3xl rounded-tl rounded-tr-3xl bg-[#ffffff] p-4 text-black"
            >
              <div class="min-w-[178px] break-words leading-relaxed">
                <div
                  class="markdown-body"
                  style="font-size: 14px; color: rgb(25, 19, 22); height: auto; width: auto; direction: ltr"
                >
                  <div class="relative text-sm 2xl:text-base">
                    <p>当然可以！这里是一个关于三角函数的LaTeX公式示例：</p>
                    <pre>
                      <span class="copy-code-button"></span>
                      <code>
                        \[
                        \sin^{2}x + \cos^{2}x = 1
                        \]
                      </code>
                    </pre>
                    <p>
                      这个公式表示的是勾股定理在三角函数空间中的推广形式，也被称为"Pythagorean
                      identity"。在这个公式中，<code>\sin</code>和<code>\cos</code>分别代表正弦和余弦函数，而<code>x</code>是我们要考虑的角度。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
