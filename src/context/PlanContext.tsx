import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";

// Define the shape of your data
interface Plan {
  name: string;
  monthPrice: number;
  yearPrice: number;
  icon: string;
}

interface AddOns {
  onlineService: number;
  largerStorage: number;
  customizableProfile: number;
}

// Define types for our state and actions
interface PlanState {
  plans: Plan[];
  selectedPlan: string;
  isYearly: boolean;
  addOns: {
    monthAddOns: AddOns;
    yearAddOns: AddOns;
  };
  selectedAddOns: string[]; // Array to store selected add-ons
  name: string;
  email: string;
  phoneNum: string;
}

type PlanAction =
  | { type: "USER_NAME"; payload: string }
  | { type: "USER_EMAIL"; payload: string }
  | { type: "USER_PHONENUM"; payload: string }
  | { type: "CREATE_PLAN"; payload: Plan[] }
  | { type: "MONTHLY_ADDONS_PLAN"; payload: AddOns }
  | { type: "YEARLY_ADDONS_PLAN"; payload: AddOns }
  | { type: "SELECT_PLAN"; payload: string }
  | { type: "SELECT_ADDONS"; payload: string }
  | { type: "TOGGLE_BILLING" };

// Initial state
const initialState: PlanState = {
  plans: [],
  selectedPlan: "Arcade",
  isYearly: false,
  addOns: {
    monthAddOns: {
      onlineService: 0,
      largerStorage: 0,
      customizableProfile: 0,
    },
    yearAddOns: {
      onlineService: 0,
      largerStorage: 0,
      customizableProfile: 0,
    },
  },
  selectedAddOns: [],
  name: "",
  email: "",
  phoneNum: "",
};

// Reducer function
function planReducer(state: PlanState, action: PlanAction): PlanState {
  switch (action.type) {
    case "USER_NAME":
      return { ...state, name: action.payload };
    case "USER_EMAIL":
      return { ...state, email: action.payload };
    case "USER_PHONENUM":
      return { ...state, phoneNum: action.payload };
    case "CREATE_PLAN":
      return { ...state, plans: action.payload };
    case "MONTHLY_ADDONS_PLAN":
      return {
        ...state,
        addOns: { ...state.addOns, monthAddOns: action.payload },
      };
    case "YEARLY_ADDONS_PLAN":
      return {
        ...state,
        addOns: { ...state.addOns, yearAddOns: action.payload },
      };
    case "SELECT_PLAN":
      return { ...state, selectedPlan: action.payload };
    case "SELECT_ADDONS": {
      const addOn = action.payload;
      const isSelected = state.selectedAddOns.includes(addOn);

      return {
        ...state,
        selectedAddOns: isSelected
          ? state.selectedAddOns.filter((item) => item !== addOn)
          : [...state.selectedAddOns, addOn],
      };
    }

    case "TOGGLE_BILLING":
      return { ...state, isYearly: !state.isYearly };
    default:
      throw new Error("Unknown Action");
  }
}

// Create the context
interface PlanContextProps {
  plans: Plan[];
  selectedPlan: string;
  isYearly: boolean;
  addOns: {
    monthAddOns: AddOns;
    yearAddOns: AddOns;
  };
  selectedAddOns: string[];
  dispatch: React.Dispatch<PlanAction>;
  name: string;
  email: string;
  phoneNum: string;
}

const PlanContext = createContext<PlanContextProps | undefined>(undefined);

// Context provider component
const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [
    {
      plans,
      selectedPlan,
      isYearly,
      addOns,
      selectedAddOns,
      name,
      email,
      phoneNum,
    },
    dispatch,
  ] = useReducer(planReducer, initialState);

  useEffect(() => {
    const fetchPlans = async () => {
      const response = await fetch("/plans.json");
      const data = await response.json();
      dispatch({ type: "CREATE_PLAN", payload: data.plans });
      dispatch({
        type: "MONTHLY_ADDONS_PLAN",
        payload: data.addOns[0].monthAddOns,
      });
      dispatch({
        type: "YEARLY_ADDONS_PLAN",
        payload: data.addOns[0].yearAddOns,
      });
    };
    fetchPlans();
  }, []);
  

  return (
    <PlanContext.Provider
      value={{
        plans,
        selectedPlan,
        isYearly,
        addOns,
        selectedAddOns,
        dispatch,
        name,
        email,
        phoneNum,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

// Custom hook to use the PlanContext
const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlanContext must be used within a PlanProvider");
  }
  return context;
};

export { PlanProvider, usePlan };
