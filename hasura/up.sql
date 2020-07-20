CREATE TABLE public.comments (
    id integer NOT NULL,
    author text,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    hidden boolean DEFAULT false NOT NULL,
    post_id text
);
CREATE SEQUENCE public.comments_id_seq AS integer START WITH 1 INCREMENT BY 1 NO MINVALUE NO MAXVALUE CACHE 1;
ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;
ALTER TABLE ONLY public.comments
ALTER COLUMN id
SET DEFAULT nextval('public.comments_id_seq'::regclass);
ALTER TABLE ONLY public.comments
ADD CONSTRAINT comments_pkey PRIMARY KEY (id);