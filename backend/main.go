package main

import (
	"errors"
	"fmt"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/create-payment-intent", handleCreatePaymentIntent)

	addr := "localhost:4242"
	err := http.ListenAndServe(addr, nil)
	if err != nil {
		log.Fatal(err)
	}
}

func returnsError() error {
	return errors.New("something went wrong")

}

func handleCreatePaymentIntent(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint Called")

}
