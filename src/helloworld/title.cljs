(ns helloworld.title
  [:require [cljs.core.async :refer (put!)]])

(defn header [message]
  [:div {}
   [:h1 {:class "title"} message]])

(defn items-list [EVENTCHANNEL items active-item] 
  (for [[index item] (filter #(even? (first %)) (map-indexed vector items))]
    [:div {:class (if (= active-item item) "active item" "item") 
           :key (:display item)}
     [:p
      {:on-click (fn [event]
                   (put! EVENTCHANNEL [:update-active-item {:active-item item}]))}
      (:display item)]]))
