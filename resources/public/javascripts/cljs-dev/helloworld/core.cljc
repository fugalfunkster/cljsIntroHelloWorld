(ns helloworld.core
 (:require [reagent.core :as reagent]))



(defn say-hello  []
  (js/console.log "Hello Lauren!"))

(say-hello)

