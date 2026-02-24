// 3次元の座標定義
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

// 回転の定義
export interface Rotation {
  angle: number; // 0-360
}

// 配置情報の集約
export interface Transform {
  position: Vector3;
  rotation: Rotation;
  scale: number;
}

// 計算用のメタデータ
export interface ItemMetadata {
  price: number;
  weight: number;
}

// 素材の種類
export type ItemType = 'stone' | 'driftwood' | 'plant' | 'other';

// 個別アイテムのインターフェース
export interface AquariumItem {
  id: string;       // UUID等のユニークID
  assetId: string;  // 素材マスタとの紐付け用
  type: ItemType;
  transform: Transform;
  zIndex: number;
  metadata: ItemMetadata;
}

// 水槽環境のインターフェース
export interface AquariumEnvironment {
  size: {
    width: number;
    height: number;
    depth: number;
  };
  soil: {
    type: string;
    depthFront: number;
    depthBack: number;
  };
  // 必要に応じて水質パラメータ等を追加
}

// Zustand等のストア全体の状態定義
export interface AquaDraftState {
  environment: AquariumEnvironment;
  items: AquariumItem[];
}