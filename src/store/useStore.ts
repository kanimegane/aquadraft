import { create } from 'zustand';
import { AppConfig, LayoutState } from '../types/aquarium';

// Store全体の型定義
interface AquariumStore {
  config: AppConfig;
  layout: LayoutState;
  
  // Actions: 状態を更新するための関数
  setConfig: (config: Partial<AppConfig>) => void;
  setBudgetBlockMode: (enabled: boolean) => void;
  setLayout: (layout: Partial<LayoutState>) => void;
  resetLayout: () => void;
}

// 初期の状態（Initial State）
const initialConfig: AppConfig = {
  budgetBlockMode: true, // デフォルトは「厳格な予算管理モード」
  showBudgetBar: true,
};

const initialLayout: LayoutState = {
  items: [],
  lastCalculatedCost: 0,
  lastCalculatedWeight: 0,
};

// Storeの生成
export const useStore = create<AquariumStore>((set) => ({
  config: initialConfig,
  layout: initialLayout,

  // 特定の設定のみを更新するアクション
  setConfig: (newConfig) =>
    set((state) => ({ config: { ...state.config, ...newConfig } })),

  // 予算モードのみを切り替えるショートカット
  setBudgetBlockMode: (enabled) =>
    set((state) => ({ config: { ...state.config, budgetBlockMode: enabled } })),

  // レイアウト情報を更新するアクション
  setLayout: (newLayout) =>
    set((state) => ({ layout: { ...state.layout, ...newLayout } })),

  // 全てをリセット（やり直し）するアクション
  resetLayout: () => set({ layout: initialLayout }),
}));