import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* =========================================================
   TYPES
========================================================= */

export interface Event {
  _id: string;
  title: string;
  description: string;

  image?: string;
  category?: string;

  date: string;
  time?: string;

  venue?: string;
  location?: string;

  organizer?: string;
  organizerId?: string;

  price?: number;
  currency?: string;

  capacity?: number;
  registeredCount?: number;

  status?: "upcoming" | "ongoing" | "completed" | "cancelled";

  createdAt?: string;
  updatedAt?: string;
}

interface EventContextType {
  /* Events */
  events: Event[];
  setEvents: React.Dispatch<React.SetStateAction<Event[]>>;

  /* Selected event */
  selectedEvent: Event | null;
  setSelectedEvent: React.Dispatch<React.SetStateAction<Event | null>>;

  /* Loading */
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  /* Error */
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;

  /* Search */
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;

  /* Category */
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;

  /* Filtered events */
  filteredEvents: Event[];

  /* Helpers */
  getEventById: (id: string) => Event | undefined;
  clearSelectedEvent: () => void;
  clearFilters: () => void;
}

/* =========================================================
   CONTEXT
========================================================= */

const EventContext = createContext<EventContextType | undefined>(
  undefined
);

/* =========================================================
   PROVIDER
========================================================= */

interface EventProviderProps {
  children: ReactNode;
}

export const EventProvider = ({ children }: EventProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  const [selectedEvent, setSelectedEvent] = useState<Event | null>(
    null
  );

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  /* =========================================================
     FETCH EVENTS
  ========================================================= */

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        /*
          Connect your backend here later.

          Example:

          const response = await apiRequest("/events");

          if (response.success) {
            setEvents(response.data);
          }
        */

        // Temporary empty state until backend endpoint is connected.
        setEvents([]);
      } catch (err) {
        console.error("Failed to fetch events:", err);

        setError("Unable to load events.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  /* =========================================================
     GET EVENT BY ID
  ========================================================= */

  const getEventById = (id: string) => {
    return events.find((event) => event._id === id);
  };

  /* =========================================================
     FILTER EVENTS
  ========================================================= */

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.category?.toLowerCase().includes(query) ||
        event.venue?.toLowerCase().includes(query) ||
        event.location?.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "All" ||
        !selectedCategory ||
        event.category?.toLowerCase() ===
          selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [events, searchQuery, selectedCategory]);

  /* =========================================================
     CLEAR SELECTED EVENT
  ========================================================= */

  const clearSelectedEvent = () => {
    setSelectedEvent(null);
  };

  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  /* =========================================================
     CONTEXT VALUE
  ========================================================= */

  const value = useMemo(
    () => ({
      events,
      setEvents,

      selectedEvent,
      setSelectedEvent,

      loading,
      setLoading,

      error,
      setError,

      searchQuery,
      setSearchQuery,

      selectedCategory,
      setSelectedCategory,

      filteredEvents,

      getEventById,
      clearSelectedEvent,
      clearFilters,
    }),
    [
      events,
      selectedEvent,
      loading,
      error,
      searchQuery,
      selectedCategory,
      filteredEvents,
    ]
  );

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};

/* =========================================================
   HOOK
========================================================= */

export const useEvent = () => {
  const context = useContext(EventContext);

  if (!context) {
    throw new Error(
      "useEvent must be used inside an EventProvider"
    );
  }

  return context;
};

export default EventContext;
