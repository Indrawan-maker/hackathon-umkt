export type AreaTreatment = "Kepala" | "Kaki" | "Tangan" | "Punggung" | "Upper" | "Full Badan";
export type LevelTreatment = "Lembut" | "Normal" | "Keras";

export interface Treatment {
  kode: string;
  nama: string;
  area: AreaTreatment;
  level: LevelTreatment;
  harga: Record<number, number>;
}