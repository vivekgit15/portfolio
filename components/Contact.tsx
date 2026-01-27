"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message too short"),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(
      `Portfolio Contact from ${values.name}`
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );

    window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 pt-24 pb-24 px-6"
    >
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="text-gray-400 mb-12">
          Have an opportunity or want to collaborate?  
          Feel free to reach out.
        </p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
              space-y-6
              rounded-2xl p-8
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-lg
            "
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Your message"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
