interface LogoProps {
  theme?: "light" | "dark";
}
const Logo = ({ theme = "dark" }: LogoProps) => (
  <div className="flex gap-4">
    <svg
      className={`h-8 w-auto ${theme === "dark" ? "text-dark-white" : "text-light-darkest"}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 189 32"
    >
      <g clipPath="url(#clip0_18000_230)">
        <path fill="#E1E4F2" d="M32 0v32h-8V0z"></path>
        <path fill="#A8ADC9" d="M24 0v32h-8V0z"></path>
        <path fill="#747A9B" d="M16 0v32H8V0z"></path>
        <path fill="#474B66" d="M8 0v32H0V0z"></path>
      </g>
      <path
        fill="currentColor"
        d="M50.208 27.256q-2.464 0-4.448-1.088-1.952-1.12-3.104-3.136-1.12-2.048-1.12-4.768t1.152-4.736q1.152-2.047 3.136-3.136 1.984-1.12 4.448-1.12t4.448 1.12q2.017 1.087 3.136 3.136 1.152 2.016 1.152 4.736 0 2.688-1.152 4.736a8.1 8.1 0 0 1-3.168 3.168q-2.016 1.088-4.48 1.088m0-1.952a6.8 6.8 0 0 0 3.2-.768q1.471-.8 2.368-2.368.928-1.6.928-3.904t-.896-3.872q-.896-1.6-2.368-2.368a6.6 6.6 0 0 0-3.2-.8 6.6 6.6 0 0 0-3.2.8q-1.471.768-2.368 2.368-.864 1.568-.864 3.872t.864 3.904q.896 1.568 2.336 2.368a6.8 6.8 0 0 0 3.2.768m15.443-12.672a5.5 5.5 0 0 1 2.24-2.528q1.536-.896 3.744-.896v2.336h-.608q-2.431 0-3.904 1.312t-1.472 4.384V27h-2.24V9.528h2.24zM84.477 27l-4.512-7.04L75.613 27h-2.368l5.632-8.736-5.568-8.736h2.528l4.448 6.944 4.32-6.944h2.336l-5.568 8.64L87.005 27zm4.863-8.768q0-2.688 1.056-4.704 1.087-2.047 2.976-3.136 1.92-1.12 4.32-1.12 2.496 0 4.288 1.152 1.823 1.152 2.624 2.944v-3.84h2.24V27h-2.24v-3.872q-.832 1.793-2.656 2.976-1.792 1.152-4.288 1.152-2.368 0-4.288-1.12-1.888-1.12-2.976-3.168-1.056-2.048-1.056-4.736m15.264.032q0-2.112-.864-3.712-.865-1.6-2.368-2.464-1.473-.864-3.264-.864-1.857 0-3.328.832-1.473.832-2.336 2.432-.832 1.567-.832 3.744 0 2.145.832 3.776.863 1.6 2.336 2.464 1.471.832 3.328.832 1.791 0 3.264-.864 1.503-.864 2.368-2.464.864-1.6.864-3.712m10.585-6.848v10.848q0 1.6.608 2.208.609.608 2.144.608h2.048V27h-2.4q-2.367 0-3.52-1.088-1.152-1.12-1.152-3.648V11.416h-2.432V9.528h2.432V5.144h2.272v4.384h4.8v1.888zm7.791 6.816q0-2.688 1.056-4.704 1.088-2.047 2.976-3.136 1.92-1.12 4.32-1.12 2.496 0 4.288 1.152 1.823 1.152 2.624 2.944v-3.84h2.24V27h-2.24v-3.872q-.832 1.793-2.656 2.976-1.792 1.152-4.288 1.152-2.368 0-4.288-1.12-1.888-1.12-2.976-3.168-1.056-2.048-1.056-4.736m15.264.032q0-2.112-.864-3.712-.865-1.6-2.368-2.464-1.473-.864-3.264-.864-1.857 0-3.328.832-1.472.832-2.336 2.432-.832 1.567-.832 3.744 0 2.145.832 3.776.864 1.6 2.336 2.464 1.471.832 3.328.832 1.791 0 3.264-.864 1.504-.864 2.368-2.464t.864-3.712M156.016 4.664q3.52 0 6.176 1.376 2.688 1.376 4.128 3.936 1.472 2.528 1.472 5.888t-1.472 5.888q-1.44 2.496-4.128 3.872Q159.536 27 156.016 27h-7.808V4.664zm-.16 18.528q3.52 0 5.44-1.92t1.92-5.408-1.92-5.44q-1.92-1.984-5.44-1.984h-3.168v14.752zm23.321 4.032q-2.335 0-4.224-.8-1.855-.8-2.944-2.304-1.087-1.505-1.12-3.552h4.8q.096 1.376.96 2.176.896.8 2.433.8 1.568 0 2.463-.736.897-.768.897-1.984 0-.991-.609-1.632-.608-.64-1.535-.992-.897-.384-2.496-.832-2.176-.64-3.553-1.248-1.344-.64-2.336-1.888-.96-1.28-.96-3.392 0-1.985.992-3.456.993-1.472 2.784-2.24 1.793-.8 4.097-.8 3.456 0 5.6 1.696 2.175 1.665 2.4 4.672h-4.928q-.065-1.152-.992-1.888-.897-.768-2.401-.768-1.311 0-2.112.672-.767.672-.767 1.952 0 .896.575 1.504.609.576 1.473.96.895.352 2.496.832 2.175.64 3.552 1.28 1.375.64 2.368 1.92t.992 3.36q0 1.792-.929 3.328-.927 1.536-2.719 2.464-1.792.896-4.257.896"
      ></path>
      <defs>
        <clipPath id="clip0_18000_230">
          <path
            fill="currentColor"
            d="M30 0a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
          ></path>
        </clipPath>
      </defs>
    </svg>

    <span className="sr-only">Orxata DS</span>
  </div>
);

export default Logo;
