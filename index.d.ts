declare module "fesnuk" {
  /**
   * Melempar error khas fesnuk.
   * @param message Pesan error (opsional), default: "Daripada stress debug, mending scroll fesnuk"
   * @throws Error dengan pesan kocak.
   */
  export function FesnukError(message?: string): never;

  /**
   * Mengambil kutipan motivasi ngoding random.
   */
  export function MotivateNgoding(): string;

  /**
   * Mengambil kutipan quote ngoding random.
   */
  export function FesnukQuote(): string;

  /**
   * Menampilkan debug message khas fesnuk.
   */
  export function FesnukDebug(): string;

  /**
   * Menampilkan alasan kenapa program gagal.
   */
  export function WhyItFails(): string;

  /**
   * Menyalahkan seseorang atau tim dengan gaya khas fesnuk.
   * @param name Nama yang mau disalahkan.
   */
  export function FesnukBlame(name: string): string;

  /**
   * Menggoda user untuk buka grup Facebook IMPHNEN.
   */
  export function Imphnen(): string;

  /**
   * Menggoda user untuk buka Facebook.
   */
  export function FesnukOpen(): Promise<void> | string;

  /**
   * Fungsi utama Fesnuk yang bisa jalanin banyak mode.
   * @param mode Mode aksi: "motivate", "quote", "debug", "why", "blame", "imphnen", "error", atau "random"
   * @param message Pesan tambahan (digunakan di mode "error")
   * @returns Pesan string atau melempar error (jika mode "error")
   */
  export default function Fesnuk(
    mode?:
      | "motivate"
      | "quote"
      | "debug"
      | "why"
      | "blame"
      | "imphnen"
      | "open"
      | "error"
      | "random",
    message?: string
  ): string | never;
}
