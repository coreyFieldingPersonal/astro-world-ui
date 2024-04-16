/**
 * Modal component
 * @param _props - Record<string, any>
 * @param _props.title - `<h3>` header text content
 * @param _props.closeText - `<button>` text content - default: "Close"
 */

type Modal = typeof import('./src/index.js').Modal
export const Modal: Modal

declare global {
    interface Window {
        closeModal: () => void
    }
}